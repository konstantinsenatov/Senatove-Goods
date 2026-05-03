# Roadmap

## Phase 1 - Project Setup
- Confirm Local app integrity for `senatove-service-kit`.
- Validate active WordPress instance and baseline development workflow in Cursor.
- Prepare naming consistency across docs and code (`senatove-service-theme`, `senatove-sections-builder`).

## Phase 2 - Documentation Foundation
- Finalize product strategy, architecture, theme spec, and plugin spec.
- Lock builder UX flow and initial section library for v1.
- Record non-negotiable scope in [[10 Decisions]].

## Phase 3 - Theme Skeleton
- Create base theme folder structure and core bootstrap files.
- Add template hierarchy baseline and reusable rendering primitives.
- Set up visual foundations for premium/minimal/calm/warm/editorial direction.

## Phase 4 - Plugin Skeleton
- Create plugin bootstrap and admin module structure.
- Define section registry conventions and section schema contracts.
- Prepare storage conventions for section instances per page.

## Phase 5 - Builder Core
- Implement admin builder panel/metabox.
- Add section instance list rendering and ordering controls.
- Implement section field rendering from registry definitions.

## Phase 6 - First Section Types
- Implement v1 section categories from [[09 Section Library v1]].
- Build field schemas and validation rules for each section.
- Ensure section output contracts are theme-render compatible.

## Phase 7 - Modal Section Library
- Implement modal library with category tabs.
- Add section cards with preview, concise use-case label, and add action.
- Wire add-section action to builder state.

## Phase 8 - Save and Render Logic
- Persist builder data in controlled structured format.
- Implement frontend rendering pipeline in theme.
- Validate safe fallback behavior for missing or outdated section definitions.

## Phase 9 - Testing
- Test full admin flow: add, edit, reorder, remove, save.
- Test frontend consistency across core templates.
- Run regressions on data integrity and UX clarity.

## Phase 10 - Packaging
- Prepare distributable theme and plugin packages.
- Verify install/activation flow on a clean Local WordPress instance.
- Finalize release notes and internal handoff checklist.
