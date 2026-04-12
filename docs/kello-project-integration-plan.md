# Kello Project Integration Plan

Prepared: 2026-04-06
Scope: Add `../../kello` as a flagship project in this portfolio and present it as a high-value case study.

## 1. Positioning

- Replace the generic "School System" portfolio item with "Kello School Platform".
- Present it as a production-grade, multi-tenant, role-based school operations platform.
- Keep the card concise and move strategic depth to the details page.

## 2. Data Content Upgrade

Target file: `src/app/data/portfolio-items.ts`

- Update one project entry to include:
- strong `problemStatement` about fragmented school workflows and low-connectivity constraints
- clear `solutionApproach` describing architecture and delivery strategy
- richer `stackByLayer` (Angular, React Native, Spring Boot, PostgreSQL, Redis, Flyway, JWT/OAuth)
- practical `flowSteps` (admin setup, teacher workflows, student/parent visibility, finance/reporting)
- evidence-oriented `impactPoints`
- realistic `tradeoffs` and next-phase items
- Add links for repository and demo (when demo is available).

## 3. Flagship Card Treatment

Target files:
- `src/app/components/project-card/project-card.component.html`
- `src/app/components/project-card/project-card.component.scss`

Plan:
- Add a "Flagship" badge for Kello only.
- Add proof chips (example: `Multi-tenant`, `5 Roles`, `Web + Mobile`).
- Keep card density controlled so it remains scannable.

## 4. Case Study Details Page

Target file: `src/app/pages/portfolio-details/portfolio-details.component.html`

Add sections:
- Scope at a glance (roles, platforms, modules)
- Architecture decision note (modular monolith rationale for V1)
- Execution status snapshot (completed baseline and next-phase focus)

Goal: show technical decision-making, delivery maturity, and product understanding.

## 5. Proof Assets

- Capture 4-6 screenshots from actual Kello web/mobile flows.
- Save assets under `public/` in this repo.
- Wire at least one as `imageUrl` and use additional images in details presentation.

Priority screens:
- web dashboard
- teacher attendance
- finance/reporting
- mobile role-based view

## 6. Portfolio Ordering and Discovery

Target files:
- `src/app/data/portfolio-items.ts`
- (optional) project list rendering logic if ordering needs explicit control

Plan:
- Place Kello first so it appears in home preview.
- Keep category as `commercial`.
- Ensure discoverable technology tags (Spring Boot, React Native, PostgreSQL, RBAC, OAuth2).

## 7. Copy Quality Pass

- Replace generic text with value-driven lines that reflect outcome and ownership.
- Focus on clarity and credibility over hype.

## 8. Implementation Order

1. Update content model and Kello entry in `portfolio-items.ts`.
2. Add flagship treatment in project card UI.
3. Add case-study sections in details page UI.
4. Add screenshots and connect media.
5. Run quick visual/UX pass across desktop and mobile.

## 9. Acceptance Criteria

- Kello is visible in Projects preview and full portfolio list.
- Card communicates clear value in under 10 seconds.
- Details page demonstrates architecture, workflow, and impact.
- At least 4 real project visuals are present.
- Presentation feels intentional, evidence-based, and recruiter/client ready.
