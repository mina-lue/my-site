# Desalegn inventory showcase refresh

Prepared 2026-11-16. Status: scoped; implementation pending.

## Goal

Present the inventory and employee management application built for Desalegn Cement Factory through a clear, modern UI and a small set of reliable business workflows. Retain Angular, Spring Boot, and PostgreSQL; use the existing Docker setup for repeatable demos.

## Review before changes

Read the current README, routes, relevant services and earlier inventory assessment in the separate inventory source repository. The May assessment is historical: later work already introduced account setup and authentication, so reproduce each issue before treating it as current. Capture baseline screenshots and a clean end-to-end walkthrough with fictional data.

## UI scope

- Refresh the shell, spacing, typography, page headings, sidebar and responsive navigation within the existing Angular/NG-Zorro design.
- Make dashboard stock, sales, production and attendance summaries readable and consistently labeled.
- Standardize tables and forms, including loading, empty, validation, error and successful-save states.
- Make the register, receive-materials, produce, sell, attendance and report paths clear. The current Sell menu link is nested inside an empty anchor; verify and correct navigation.

## Targeted logic scope

- Reproduce receive → produce → sell and verify raw-material and finished-product quantities after each step.
- Check positive quantity validation, insufficient stock handling and atomic rollback before changing stock logic.
- Verify duplicate submission behavior and persisted balances after reload.
- Verify attendance check-in/out and working-hours-based salary results with fixed sample times.
- Fix demonstrated failures in these flows, with focused regression checks for material stock or financial changes.

## Showcase acceptance

- App starts from documented setup, and account creation, demo seeding and sign-in work in an isolated local environment.
- One product can be produced and sold with matching stock movement and report totals.
- Invalid operations explain the error and leave stock and balances unchanged.
- Core screens work at desktop and narrow mobile widths with keyboard-accessible controls.
- Capture before/after screenshots and a short walkthrough using fictional company and employee data.
- Record the implemented changes and checks before marking this refresh delivered in the profile.

Keep this refresh small. Multi-warehouse operations, barcode systems and a backend rewrite are outside this scope. Preserve the distinction between original client work and later portfolio improvements.
