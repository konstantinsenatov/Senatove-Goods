# Done

## Shipped

- Theme + plugin split: render vs builder/data/sanitize.
- Section registry, defaults, sanitizer, PHP templates, metabox + JS admin.
- CSS: `sections.css` + variables.
- Section families: Banners, Text blocks, Cards (per pattern: settings, fields, template, CSS block).

## Cards (v1)

- Types: `cards_image_grid`, `cards_icon_grid`, `cards_icon_split_grid`, `cards_pricing_grid`, `cards_steps_grid`.
- Columns 2–6; align left/center; top+bottom content; spacing; width boxed/full; dark/light/warm.
- Image cards: full/contained, height small/medium/large, `object-fit: cover`, ratio removed.

## Icons

- ~500 icons, search + categories, `icon_key` stored.
- Sizes, backgrounds, shapes, dual tone + auto contrast, stroke normal/bold.

## UI / admin

- Section vs surface type styles; readability on dark sections; icon contrast from surface.
- Preview chips; repeaters; reindex + binding fixes; icon modal; live preview.

## Bugs closed

- Card save / repeater mismatch; image actions after reindex; icon row binding; spacing on new cards; dark-section text; icon contrast.

## Status

- Stable builder; cards v1 production-ready; consistent UI.
