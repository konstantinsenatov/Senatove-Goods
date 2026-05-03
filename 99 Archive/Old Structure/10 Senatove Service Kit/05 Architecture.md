# Architecture

## System Overview
The product is a coordinated two-part WordPress system:
- **Theme** for frontend rendering and premium visual layer.
- **Plugin** for admin-side section-building UX and structured section data.

This separation keeps rendering concerns and editing concerns cleanly scoped.

## Theme Responsibility
- Render section data into polished frontend components.
- Own design system tokens, layout constraints, typography, and interaction styling.
- Provide page templates and template parts for consistent output.
- Enforce premium visual consistency across all supported sections.

## Plugin Responsibility
- Register section definitions and field schemas.
- Provide builder panel/metabox UX in admin.
- Handle section add/edit/reorder/remove operations.
- Save structured section payloads tied to pages/posts.

## Builder Responsibility
- Present curated section library via categories/tabs.
- Provide preview-led section selection via modal.
- Render section-specific editable fields after insertion.
- Maintain ordered section stack as the source of page composition.

## Data Flow (Admin to Frontend)
1. User adds sections in admin builder.
2. Plugin stores structured section instances (type + fields + order).
3. Theme fetches stored section stack on render.
4. Theme resolves section type to renderer template/component.
5. Frontend outputs premium UI with controlled layout rules.

## What Must Stay Controlled
- Allowed section types (registry-driven).
- Field schema per section (no arbitrary field generation).
- Layout variants (predefined, not unrestricted drag-and-drop grid logic).
- Rendering mappings (theme-controlled output contracts).

## Why This Is Not a Generic Page Builder
The goal is not unlimited layout freedom. The goal is curated speed, quality, and consistency. A generic builder optimizes for open-ended construction; Senatove Service Kit optimizes for premium service pages with guided choices and reliable visual outcomes.

## Related
- [[06 Theme Spec]]
- [[07 Plugin Spec]]
- [[08 Builder UX]]
