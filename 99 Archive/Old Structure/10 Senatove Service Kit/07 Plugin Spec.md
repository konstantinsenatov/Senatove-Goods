# Plugin Spec

## Public Name
**Senatove Sections Builder**

## Slug
`senatove-sections-builder`

## Purpose
Provide a curated admin-side section builder for assembling service pages without code, while preserving strict compatibility with theme rendering contracts.

## Admin-Side Role
- Expose section library and section management interface.
- Handle section insertion, editing, ordering, and removal.
- Persist normalized section data per content item.
- Validate saved data against section schemas.

## Section Registry Concept
A central registry defines each supported section:
- Unique section key.
- Category assignment.
- Human-readable label and description.
- Field schema and validation rules.
- Optional preview metadata.
- Supported layout variants.

Registry-driven design keeps builder extensible and predictable.

## Builder Metabox/Panel Concept
- Dedicated panel in page edit screen.
- Ordered section instance list as primary composition surface.
- "Add Section" action opens modal library.
- Clicking a section instance reveals editable fields inline or in a side panel.

## Save Logic Concept
- Serialize section stack as structured data (ordered array of section instances).
- Store section type, field payload, and selected variant per instance.
- Apply sanitization/validation per schema before persist.
- Preserve backward compatibility for evolving section definitions.

## Relationship with Theme
The plugin owns editor UX and data structure. The theme owns rendering quality and frontend output. Both are versioned as companions and aligned through section contracts.

## Future Expandability
- Additional section packs.
- Optional role-based editing restrictions.
- Import/export of section stacks.
- Revision-aware section history.
- Controlled third-party extension points.

## Related
- [[05 Architecture]]
- [[06 Theme Spec]]
- [[08 Builder UX]]
