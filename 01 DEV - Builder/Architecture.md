# Architecture

## Split

- **Theme:** frontend only — maps saved section JSON to PHP partials + CSS.
- **Plugin:** registry, defaults, validation, metabox/JS, save/load.

## Pipeline

1. Registry defines section keys + field schemas (+ defaults).
2. Admin edits instances → JS repeaters / pickers → normalized payload.
3. Sanitizer runs on save (strip unknown keys, coerce types).
4. Theme reads ordered stack → includes render template per section + shared CSS tokens.

## Components

| Part | Role |
|------|------|
| Registry | Section keys, fields, settings shape |
| Defaults | Initial rows / presets for new instances |
| Sanitizer | Valid allowed values only |
| Render templates | PHP output per section type |
| Admin UI | Metabox, section list, sidebar settings |
| CSS system | Section-scoped classes + variables (`sections.css`) |

## Section instance shape

- Sidebar: layout/spacing/theme/width-type settings.
- Main: content fields (text, media, icons, repeater cards).
- One PHP template + scoped CSS per registered type.
