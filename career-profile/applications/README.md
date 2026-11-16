# Local applications

Generated application folders are ignored by Git. Keep job descriptions, tailored CVs, proposals, fit notes and submission records here locally. The tracked profile remains reusable and public; these folders may contain job-specific or private details.

Prepare from the repository root:

```sh
python career-profile/scripts/profile.py prepare --job /path/to/job.md --out career-profile/applications/company-role
```

The command creates `job.md`, `profile-context.json`, `AGENT_TASK.md`, and `application.yaml`. Give the task file to an agent to produce the tailored documents. The script does not use an LLM or submit applications. Add `--include-private` only when a local `career-profile/private.yaml` exists and its fields are needed.

An existing application folder is never overwritten. Use a new folder name for a new version. These ignored application files are not backed up by this public repository.
