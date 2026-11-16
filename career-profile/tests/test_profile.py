import copy
import importlib.util
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('profile_tools', ROOT / 'scripts/profile.py')
profile_tools = importlib.util.module_from_spec(spec)
spec.loader.exec_module(profile_tools)


class ProfileTests(unittest.TestCase):
    def setUp(self):
        self.data = profile_tools.load_profile(ROOT)
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.work = Path(self.temp.name)

    def test_public_export_excludes_local_supplement(self):
        profile_tools.validate(self.data, ROOT)
        bundle = json.loads((ROOT / 'profile.bundle.json').read_text(encoding='utf-8'))
        self.assertEqual(bundle, self.data)
        self.assertNotIn('phone_numbers', bundle['profile']['personal'])
        self.assertNotIn('visa_sponsorship_needed', bundle['profile']['targeting'])
        self.assertNotIn('private_supplement', bundle)

    def test_changed_project_selection_is_rejected(self):
        broken = copy.deepcopy(self.data)
        broken['projects']['projects'].pop()
        with self.assertRaisesRegex(ValueError, 'seven projects'):
            profile_tools.validate(broken, ROOT)

    def test_prepare_preserves_job_and_refuses_overwrite(self):
        job = self.work / 'input.md'
        text = '# Backend developer\nNode.js, Express.js; remote.\n'
        job.write_text(text, encoding='utf-8')
        output = self.work / 'application'
        profile_tools.prepare(self.data, job, output, root=ROOT)
        self.assertEqual((output / 'job.md').read_text(encoding='utf-8'), text)
        snapshot = json.loads((output / 'profile-context.json').read_text(encoding='utf-8'))
        self.assertNotIn('private_supplement', snapshot)
        self.assertIn('tailored_cv.md', (output / 'AGENT_TASK.md').read_text(encoding='utf-8'))
        with self.assertRaises(FileExistsError):
            profile_tools.prepare(self.data, job, output, root=ROOT)
        self.assertEqual((output / 'job.md').read_text(encoding='utf-8'), text)

    def test_private_data_requires_explicit_opt_in(self):
        job = self.work / 'job.md'
        job.write_text('Node.js role', encoding='utf-8')
        (self.work / 'private.yaml').write_text('personal:\n  phone_numbers: [fictional-test-phone]\n', encoding='utf-8')
        for opted_in in (False, True):
            output = self.work / str(opted_in)
            profile_tools.prepare(self.data, job, output, root=self.work, include_private=opted_in)
            snapshot = json.loads((output / 'profile-context.json').read_text(encoding='utf-8'))
            self.assertEqual('private_supplement' in snapshot, opted_in)
        self.assertNotIn('private_supplement', self.data)

    def test_export_drift_and_first_export(self):
        root = self.work / 'profile'
        shutil.copytree(ROOT, root, ignore=shutil.ignore_patterns('private.yaml', '__pycache__'))
        (root / 'profile.bundle.json').unlink()
        command = [sys.executable, str(root / 'scripts/profile.py')]
        first = subprocess.run(command + ['export'], capture_output=True, text=True)
        self.assertEqual(first.returncode, 0, first.stderr)
        source = root / 'profile.yaml'
        source.write_text(source.read_text(encoding='utf-8') + '\nlast_reviewed: 2026-11-16\n', encoding='utf-8')
        check = subprocess.run(command + ['validate', '--check-export'], capture_output=True, text=True)
        self.assertNotEqual(check.returncode, 0)
        self.assertIn('stale', check.stderr)
        refresh = subprocess.run(command + ['export'], capture_output=True, text=True)
        self.assertEqual(refresh.returncode, 0, refresh.stderr)
        check = subprocess.run(command + ['validate', '--check-export'], capture_output=True, text=True)
        self.assertEqual(check.returncode, 0, check.stderr)


if __name__ == '__main__':
    unittest.main()
