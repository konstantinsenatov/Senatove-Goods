# Builder UX

## UX Goal
Provide a guided, high-confidence page-building flow for non-technical users: curated choice, fast composition, and reliable premium output.

## Entry Point
The builder appears in a dedicated admin panel/metabox on editable content types (v1: core pages). The section stack is always visible as the page composition source of truth.

## Tabs and Categories
The section library opens with clear top-level tabs:
- Banners
- TextBlocks and Media
- Cards
- FAQs
- Testimonials
- CTA / Contact

Tabs reduce cognitive load and make section discovery predictable.

## Modal Library with Previews
Clicking "Add Section" opens a modal library containing section cards.
Each card includes:
- Section name.
- Short intended-use hint.
- Compact visual preview.
- "Add" action.

The modal is curated and finite by design to prevent builder sprawl.

## Section Cards
Card design should prioritize recognition speed:
- Distinct thumbnail silhouette per section type.
- Clear copy about when to use the section.
- Optional badges for "Core", "Conversion", or "Narrative" roles.

## Adding a Section
1. User opens modal.
2. User switches category tab if needed.
3. User selects a section card.
4. Section instance is inserted into the page stack.
5. Editable fields open immediately for first input pass.

## Editing Section Fields
Each section instance exposes only relevant fields:
- Structured text inputs and rich text where needed.
- Repeaters only where they provide clear value (e.g., FAQs, testimonials).
- Controlled selectors for layout/style variants.

No raw config clutter should be visible to the user.

## Reordering Sections
Section instances support reorder controls in stack order (drag handle or move actions). The list must remain stable and understandable for long pages.

## Removing Sections
Each instance has a remove action with a lightweight confirmation pattern to avoid accidental deletion. Removal should be immediate and reversible when practical (future undo support).

## Controlled Layout Variants
Some sections expose predefined variants (for example: media left / media right). Variants are constrained to approved compositions that preserve design quality.

## Why This Beats Raw Field Lists
Raw field lists force users to imagine layout and structure from abstract inputs. This builder shows curated section intent first, then exposes minimal required fields. Result: faster authoring, fewer design regressions, and better consistency across pages.

## Related
- [[07 Plugin Spec]]
- [[09 Section Library v1]]
- [[06 Theme Spec]]
