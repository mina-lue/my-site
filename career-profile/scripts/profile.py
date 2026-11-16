"""Validate career facts, export portable JSON, and prepare local application context."""
import argparse
import copy
from datetime import date, datetime
import json
from pathlib import Path
import re
import subprocess
import sys

try:
    import yaml
except ImportError:
    raise SystemExit('Install the profile dependency: python -m pip install -r career-profile/requirements.txt')

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ('profile', 'experience', 'projects', 'skills', 'preferences')


def load_profile(root=ROOT):
    return {name: yaml.safe_load((root / (name + '.yaml')).read_text(encoding='utf-8')) for name in SOURCES}


def encoded(data):
    def serialize(value):
        if isinstance(value, (date, datetime)):
            return value.isoformat()
        raise TypeError('Unsupported profile value: ' + type(value).__name__)
    return json.dumps(data, ensure_ascii=False, indent=2, default=serialize) + '\n'


def validate(data, root=ROOT, allow_missing_export=False):
    errors = []
    projects = data['projects']['projects']
    if len(projects) != 7 or len({p['id'] for p in projects}) != 7:
        errors.append('Expected seven projects with unique IDs.')
    if sum(p['tier'] == 'flagship' for p in projects) != 4 or sum(p['tier'] == 'supporting' for p in projects) != 3:
        errors.append('Expected four flagship and three supporting projects.')
    if {p['id'] for p in projects} != {'timo', 'bunocart', 'kemeqisbet', 'desalegn-inventory', 'kule', 'uzd-cars', 'hodiye'}:
        errors.append('Project selection differs from the approved seven.')
    employers = {e['company'] for e in data['experience']['experience']}
    if employers != {'Garri Software Solutions', 'Perago Information Systems'}:
        errors.append('Employer names differ from the confirmed profile.')
    if data['profile']['summary']['current_employer'] not in employers:
        errors.append('Current employer does not match experience.')
    if 'phone_numbers' in data['profile']['personal'] or 'nationality' in data['profile']['personal']:
        errors.append('Public profile contains private personal fields.')
    if 'visa_sponsorship_needed' in data['profile']['targeting']:
        errors.append('Public profile contains a private job preference.')
    for p in projects:
        path = root / p['case_study']
        if not path.is_file() or not path.resolve().is_relative_to(root.resolve()):
            errors.append('Missing or nonportable case study: ' + p['id'])
    public_files = [*root.glob('*.yaml'), *root.rglob('*.md')]
    for file in public_files:
        if file.name == 'private.yaml' or 'applications' in file.relative_to(root).parts:
            continue
        content = file.read_text(encoding='utf-8')
        if re.search(r'[A-Za-z]:[/\\]Users[/\\]', content):
            errors.append('Machine-specific home path: ' + str(file.relative_to(root)))
        for target in re.findall(r'\]\(([^)]+)\)', content):
            if '://' in target or target.startswith('#'):
                continue
            target_path = file.parent / target.split('#')[0]
            if allow_missing_export and target_path.resolve() == (root / 'profile.bundle.json').resolve():
                continue
            if not target_path.exists():
                errors.append('Broken local link in ' + str(file.relative_to(root)) + ': ' + target)
    if errors:
        raise ValueError('\n'.join(errors))


def prepare(data, job, out, root=ROOT, include_private=False):
    job_text = Path(job).read_text(encoding='utf-8')
    if not job_text.strip():
        raise ValueError('Job description is empty.')
    snapshot = copy.deepcopy(data)
    if include_private:
        private_file = root / 'private.yaml'
        if not private_file.is_file():
            raise ValueError('No local private.yaml is configured.')
        snapshot['private_supplement'] = yaml.safe_load(private_file.read_text(encoding='utf-8'))
    out = Path(out)
    # Protect an earlier application from being overwritten by a retry.
    out.mkdir(parents=True, exist_ok=False)
    (out / 'job.md').write_text(job_text, encoding='utf-8')
    (out / 'profile-context.json').write_text(encoded(snapshot), encoding='utf-8')
    try:
        revision = subprocess.run(['git', '-C', str(root), 'rev-parse', 'HEAD'], capture_output=True, text=True, check=True).stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError):
        revision = 'unavailable'
    (out / 'application.yaml').write_text(yaml.safe_dump({'status': 'prepared', 'source_revision': revision, 'includes_private_supplement': include_private, 'submitted_at': None}, sort_keys=False), encoding='utf-8')
    brief = '''# Application writing task

Read job.md and profile-context.json. Follow the repository career-profile/AGENTS.md instructions.
This folder contains input for an agent; no tailored CV has been generated or application submitted yet.

Create:
- tailored_cv.md: concise CV tailored to this role, preserving formal titles, dates and actual stacks.
- proposal.md: three short paragraphs grounded in the strongest matching evidence.
- cover_letter.md: concise role-specific cover letter.
- fit_notes.md: required/preferred requirements mapped to evidence, gaps, and any critical questions.

Use concrete contributions. Mention the Timo install metric only when relevant and preserve its exact wording.
Do not invent experience, salary, availability, work authorization, links or metrics.
Do not expose private supplement fields unless the particular application needs them.
Record draft completion in application.yaml. Submit only when the user instructs submission for this job,
and record the actual outcome without treating a prepared draft as submitted.
'''
    (out / 'AGENT_TASK.md').write_text(brief, encoding='utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command', required=True)
    check = commands.add_parser('validate')
    check.add_argument('--check-export', action='store_true')
    commands.add_parser('export')
    app = commands.add_parser('prepare')
    app.add_argument('--job', required=True, type=Path)
    app.add_argument('--out', required=True, type=Path)
    app.add_argument('--include-private', action='store_true')
    args = parser.parse_args()
    data = load_profile()
    validate(data, allow_missing_export=args.command == 'export')
    bundle = ROOT / 'profile.bundle.json'
    if args.command == 'export':
        bundle.write_text(encoded(data), encoding='utf-8')
        print('Exported public profile.bundle.json')
    elif args.command == 'validate':
        if args.check_export and (not bundle.is_file() or bundle.read_text(encoding='utf-8') != encoded(data)):
            raise ValueError('JSON export is missing or stale. Run the export command and commit it with the YAML changes.')
        print('Profile validated: seven projects, confirmed employers, portable links and public fields.')
    else:
        prepare(data, args.job, args.out, include_private=args.include_private)
        print('Prepared application context at ' + str(args.out) + '. An agent must now write the tailored documents.')


if __name__ == '__main__':
    try:
        main()
    except (ValueError, OSError, KeyError, TypeError) as error:
        print('Error: ' + str(error), file=sys.stderr)
        sys.exit(1)
