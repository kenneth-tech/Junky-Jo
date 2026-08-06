# Homepage Redesign Design

## Goal
Improve the homepage so it immediately pushes customers toward calling 877-JUNKY-JO, while still offering pre-booking as a secondary path.

## Design
The homepage will use a service-first hero with real company visuals, concise copy, and two clear actions: call first, then pre-book. Supporting sections will be reorganized into a dense, polished flow: trust proof, common services, how the job works, real work media, coverage areas, reviews, and final call-to-action.

## Content Requirements
- Primary CTA: `Call 877-JUNKY-JO`.
- Secondary CTA: `Pre-Book a Job`.
- Include a clear note that pre-booking requests still require a phone confirmation.
- Reuse the uploaded work media from `public/images/Photos and Videos`.
- Fix visible encoding glitches on the homepage.
- Keep the existing header, footer, contact page, booking page, and security behavior intact.

## Visual Requirements
- Use a real truck or work image as the primary hero visual.
- Avoid a marketing-only layout; make the first screen feel useful and local.
- Keep cards compact, readable, and responsive.
- Use orange as the action color without making the whole page one-color.

## Testing
- Add a homepage content smoke test that fails until the new CTAs and confirmation message are present.
- Run the project test suite.
- Run a production build.
