# Service Areas Coverage Map Design

## Goal

Improve the Service Areas page so visitors can quickly understand where 877Junky Jo works and what to do if their neighborhood is nearby but not listed.

## Design

The page will become a coverage-map style page without adding external map APIs or scripts. It will use a visual coverage panel with grouped zones for Brooklyn, Rockaways, and South Queens, supported by primary neighborhood cards and organized extended-area chips.

The page should prioritize clarity and conversion:

- Lead with "Junk Removal Service Areas" and a concise coverage promise.
- Show a map-like coverage panel with service zones and a central "877Junky Jo coverage" marker.
- Emphasize primary areas: Flatbush, Midwood, Sheepshead Bay, Marine Park.
- Organize extended areas by region.
- End with a "Not sure if we serve your block?" CTA with call and estimate actions.

## Constraints

- No external map provider or API key.
- Keep styling consistent with the current orange/black/white brand.
- Fix the malformed WhatsApp `rel` attribute.
- Verify with `npm run build` and existing tests.
