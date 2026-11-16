# Minalu's portable career profile

**Full Stack Developer | Node.js, Express.js, NestJS | React & Angular**

I build web applications with React and Angular, backed by Node.js, Express.js, and NestJS, and mobile apps with React Native. My experience spans logistics, procurement, education, commerce, and inventory systems. I work with Docker and Git-based collaboration, and published Timo on Google Play, reaching 300+ installs in under three months.

This folder is self-contained inside [mina-lue/my-site](https://github.com/mina-lue/my-site). Clone the repository or let an agent read these files through GitHub. No access to the original development machine, Codex skills or application source repositories is needed to write a CV.

Returning later? Start with [HANDOFF.md](HANDOFF.md) for the saved state, pending work and a resume prompt.

## Start here, any agent

Read [AGENTS.md](AGENTS.md), the structured files below, and the supplied job description. Generate a tailored CV and proposal using only supported facts. Put job-specific outputs in a local application folder. Missing optional information is recorded; ask only when it prevents an accurate application.

Copy this request into any agent with repository access:

> Read career-profile/README.md and career-profile/AGENTS.md in https://github.com/mina-lue/my-site. Use the current YAML facts or profile.bundle.json and the job description below to create a concise tailored CV, a short proposal, and private fit notes. Preserve employer names, dates, actual stacks and claim boundaries. Do not invent missing facts. Job description: [paste here].

A URL is a reference, not automatic access: an agent needs GitHub/browsing access, a clone, or the files supplied as context. Start from the branch containing the latest profile until it is merged into main.

## Source files

| File | Purpose |
| --- | --- |
| [profile.yaml](profile.yaml) | Identity, positioning, education, publishing milestone |
| [experience.yaml](experience.yaml) | Two employers, responsibilities, dates and claim boundaries |
| [projects.yaml](projects.yaml) | Four flagship and three supporting projects |
| [skills.yaml](skills.yaml) | Main, mobile and supporting skills |
| [preferences.yaml](preferences.yaml) | Public targeting and writing preferences |
| [profile.bundle.json](profile.bundle.json) | Combined public export for agents and other tools |
| [master_resume.md](master_resume.md) | Base resume to tailor |
| [TASKS.md](TASKS.md) | Pending portfolio work and evidence gaps |
| [projects/](projects/) | Seven project briefs |
| [plans/](plans/) | Node.js practical review and inventory refresh |
| [templates/](templates/) | CV, proposal and job-post structure |

YAML is authoritative. Update the matching YAML, resume and brief when new facts arrive, then regenerate the JSON and commit the update. Never treat planned inventory or study work as delivered. Website content is a separate implementation; updating this folder does not automatically publish new website copy.

## Commands

Run from the repository root with Python 3.10 or newer:

```sh
python -m pip install -r career-profile/requirements.txt
python career-profile/scripts/profile.py export
python career-profile/scripts/profile.py validate --check-export
python -m unittest discover -s career-profile/tests
```

Prepare one application's input:

```sh
python career-profile/scripts/profile.py prepare --job /path/to/job.md --out career-profile/applications/company-role
```

Then ask an agent to execute `AGENT_TASK.md` inside the new folder. The script assembles the job, current facts, provenance and writing instructions; it does not generate text with an LLM or submit an application. Outputs are local and ignored by Git. See [applications/README.md](applications/README.md).

After a fact update, save it across devices with a normal Git commit and push. Pull before editing from another device; resolve any factual differences before merging. No background synchronization is installed.

## Public and local information

This is a public repository. The public profile includes professional facts and the professional email already used for contact. Phone numbers, nationality, visa/sponsorship preferences and other private job settings are excluded from public YAML/JSON. An optional `private.yaml` supplements a local application and is ignored by Git; `prepare --include-private` includes it only in that local context.

Never commit private.yaml, generated applications, credentials or client data. The public professional profile and task board are backed up on GitHub; ignored local supplements and generated applications are not. Optional `workspace_path` values point to separate project checkouts, not required dependencies. Unknown project stacks and missing links stay explicitly unconfirmed.
