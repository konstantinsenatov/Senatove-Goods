# Senatove Builder — Handoff

## 1. Overview

- WordPress theme + companion plugin: curated section stack, not a generic page builder.
- Theme: frontend rendering. Plugin: schemas, sanitizer, admin builder, persistence.
- Goal: section-based pages with a controlled field UI and consistent CSS.

---

## 2. Architecture

### Core structure

- WordPress theme (frontend rendering).
- Plugin (builder logic, data, admin).

### Main parts

- Section registry (field definitions).
- Default sections (seed / initial data).
- Sanitizer (validates saved payloads).
- Render templates (PHP).
- Admin builder UI (metabox + JS).
- CSS system (`sections.css` + CSS variables).

---

## 3. Section system

### Families implemented

- Banners.
- Text blocks.
- Cards.

### Section pattern

Each section has:

- Settings (sidebar).
- Fields (content).
- Render template (PHP).
- CSS block.

---

## 4. Cards system (VERY IMPORTANT)

### Types

- `cards_image_grid`
- `cards_icon_grid`
- `cards_icon_split_grid`
- `cards_pricing_grid`
- `cards_steps_grid`

### Features

- Columns: 2–6.
- Align: left / center.
- Top / bottom content areas.
- Spacing system.
- Width modes: boxed / full.
- Themes: dark / light / warm.

---

## 5. Image cards

- Image mode: full / contained.
- Height presets: small / medium / large.
- `object-fit: cover`.
- Fixed ratio option removed (“no ratio”).

---

## 6. Icon system

### Icon library

- Internal icon registry (~500 icons).
- Search + category filter in picker.
- `icon_key` persisted on cards.

### Icon styling

- Sizes: small / medium / huge.
- Background: none / soft / solid / outline.
- Shape: square / rounded / circle.
- Tone: `icon_background_tone`, `icon_tone`, auto contrast.
- Stroke: normal / bold.

---

## 7. Cards UI system

- Section vs surface typography split.
- Cards stay readable on dark sections.
- Icon contrast uses surface context (not raw section), fixed.
- Admin preview chips.

---

## 8. Admin builder

- Repeater model for card rows.
- Reindex logic corrected.
- Image / icon bindings corrected after reindex.
- Icon picker modal.
- Live preview updates.

---

## 9. Bugs fixed

- Cards not saving (repeater key mismatch).
- Image remove / select broken after reindex.
- Icons not bound to correct rows.
- Spacing not applied to newly added cards.
- Body text invisible on dark sections.
- Icon contrast wrong on mixed surfaces.

---

## 10. Current state

- Builder stable for daily use.
- Cards v1 treated as production-ready.
- UI consistent across card variants.
- OK to extend toward richer layouts (see Roadmap).

---

## 11. Next step (IMPORTANT)

- Cards advanced layouts:
  - `layout_mode`: uniform / feature_first / masonry.
  - `card_size`: normal / wide / tall / large.
  - `card_style`: clean / bordered / soft / shadow / gradient.
