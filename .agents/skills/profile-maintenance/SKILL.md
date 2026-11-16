---
name: profile-maintenance
description: Maintain Minalu's central career profile, resume facts, portfolio task board, and handoff. Use for profile updates, a career check-in, or continuing unfinished profile and portfolio plans. With no details, read the saved state and offer the next useful actions. For a specific job application, follow the career-profile application instructions instead of treating the job as a profile update.
---

# Profile maintenance

Find the repository root by walking upward from this skill until `career-profile/AGENTS.md` exists. This skill travels with `mina-lue/my-site`; use paths relative to that root. Read `career-profile/AGENTS.md`, `HANDOFF.md`, `TASKS.md`, and the relevant YAML. Inspect Git status before edits. Preserve unrelated local work.

## Default check-in

When selected without a specific update, recover the context yourself:

- Read unchecked tasks and open plan acceptance criteria. Check `evidence_pending`, unconfirmed project fields, and missing public links in the profile. Read the resume and project briefs only where needed to check consistency.
- Distinguish work the agent can do from information only Minalu can supply. Use completed work or newly supplied evidence to propose factual additions; do not infer achievements or study completion from elapsed dates.
- Check the JSON export with `python career-profile/scripts/profile.py validate --check-export` if the environment can run it. A failed or unavailable check is not evidence that the facts are wrong.
- Briefly report what is unfinished, then offer up to three useful choices: update profile facts, continue a specific portfolio task, or provide missing evidence. Use an available choice/question UI when helpful. Do not ask Minalu to repeat his background or upload all the existing information again.
- If a clear task or new facts were supplied with the invocation, do that work directly. A generic check-in should not start a large implementation project before the user chooses it. Straightforward consistency repairs within the profile can be completed immediately when the existing facts establish the correction.

## Apply updates

Update the authoritative YAML, then the matching resume and project briefs. Preserve actual stacks, the seven selected projects, employer names, dates and the claim boundaries in career-profile/AGENTS.md. Keep private facts in the ignored local supplement. Unknown optional information stays pending and need not block useful work.

When the selected task is website synchronization or inventory implementation, read the corresponding plan and actual repository instructions before editing code. Finding a checkbox or plan is not proof that its implementation is complete. Mark a task complete only after the requested outcome and relevant checks are satisfied; otherwise record specific remaining work.

After profile changes, run from the repository root:

```sh
python career-profile/scripts/profile.py export
python career-profile/scripts/profile.py validate --check-export
```

Run the existing five Python tests if application tooling changed. Run checks appropriate to any website or inventory code change. Keep TASKS.md and HANDOFF.md current with actual progress, remaining blockers and useful next steps; avoid another competing list of tasks.

The user wants this profile persisted in this GitHub repository. For completed profile and task-board updates, review the diff, stage only the task's files, commit and push to the existing authorized remote within the session's permissions. Do not include unrelated website edits, private.yaml or generated applications. If a push or check fails, report it and preserve the local work. Do not turn this into authorization to deploy products, submit job applications or send messages.

Finish with what changed, what checks ran, whether GitHub is up to date, and the next useful task. Missing facts can be supplied later. No background process or scheduled check is created by this skill.
