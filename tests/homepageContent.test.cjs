const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('homepage promotes phone-first pre-booking flow', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /Call 877-JUNKY-JO/);
  assert.match(source, /Pre-Book a Job/);
  assert.match(source, /pre-booking request/i);
  assert.match(source, /phone confirmation/i);
  assert.match(source, /Photos and Videos/);
});

test('homepage hero uses uploaded media collage instead of the before-after background', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /const heroMedia = \[/);
  assert.match(source, /heroMedia\.map/);
  assert.match(source, /autoPlay/);
  [
    'July 20, 2026 jj.mp4',
    'July 3, 2026 JJ.mp4',
    'June 19, 2026 jj.mp4',
    'May 1, 2026 JJ.mp4',
    'May 22, 2026 JJ.mp4',
    'May 8, 2026 jj.mp4',
    'WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    'WhatsApp Image 2026-04-20 at 11.22.59.jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.41 PM.jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.43 PM (1).jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.43 PM (2).jpeg',
    'WhatsApp Image 2026-04-28 at 10.46.06 PM.jpeg',
    'WhatsApp Image 2026-04-28 at 10.46.12 PM.jpeg',
    'WhatsApp Image 2026-05-12 at 10.08.27 PM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.31.11 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.34.36 AM.jpeg',
    'WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    'WhatsApp Image 2026-05-25 at 12.19.19 AM (2).jpeg',
    'WhatsApp Image 2026-05-25 at 12.19.20 AM.jpeg',
    'WhatsApp Image 2026-05-26 at 10.35.19 AM (1).jpeg',
    'WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
  ].forEach((filename) => {
    assert.match(source, new RegExp(filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });
  assert.doesNotMatch(source, /before-after\.png/);
  assert.doesNotMatch(source, /backgroundImage: 'url\("\/images\/before-after\.png"\)'/);
  assert.match(source, /Junk Removal in Brooklyn Fast, Same-Day Service/);
  assert.doesNotMatch(source, /Junk Removal in Brooklyn \&mdash; Fast, Same-Day Service/);
  assert.match(source, /You point, we haul it\./);
  assert.doesNotMatch(source, /You point \&mdash; we haul it\./);
  assert.match(source, /bg-black\/55/);
  assert.match(source, /from-black\/60 via-black\/25 to-black\/70/);
  assert.doesNotMatch(source, /bg-black\/65/);
  assert.doesNotMatch(source, /from-black\/70 via-black\/35 to-black\/80/);
  assert.match(source, /Pre-Book a Job/);
  assert.match(source, /href="\/book"/);
  assert.doesNotMatch(source, /Get Pre-Booking Call/);
  assert.doesNotMatch(source, /src="\/images\/truck-hero\.jpg"/);
  assert.doesNotMatch(source, /Brooklyn junk removal team/);
});

test('homepage hero mixes videos between photos in the collage order', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');
  const heroMediaSource = source.slice(
    source.indexOf('const heroMedia = ['),
    source.indexOf('const workProof = [')
  );

  const mediaTypes = [...heroMediaSource.matchAll(/type: '(photo|video)'/g)].map((match) => match[1]);

  assert.equal(mediaTypes.length, 22);
  assert.notDeepEqual(mediaTypes.slice(0, 6), ['video', 'video', 'video', 'video', 'video', 'video']);

  for (let index = 0; index <= mediaTypes.length - 3; index += 1) {
    assert.notDeepEqual(mediaTypes.slice(index, index + 3), ['video', 'video', 'video']);
  }
});

test('homepage hero uses a simplified four-tile background on mobile', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');
  const mobileHeroMediaSource = source.slice(
    source.indexOf('const mobileHeroMedia = ['),
    source.indexOf('const heroMedia = [')
  );

  const mobileMediaTypes = [...mobileHeroMediaSource.matchAll(/type: '(photo|video)'/g)].map((match) => match[1]);

  assert.deepEqual(mobileMediaTypes, ['photo', 'video', 'photo', 'photo']);
  assert.match(source, /mobileHeroMedia\.map/);
  assert.match(source, /relative flex min-h-\[680px\] items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-center text-white sm:min-h-\[600px\]/);
  assert.doesNotMatch(source, /relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-center text-white sm:min-h-\[600px\]/);
  assert.match(source, /grid-rows-2 grid-cols-2 gap-1 opacity-85 sm:hidden/);
  assert.match(source, /hidden auto-rows-fr grid-cols-3 gap-1 opacity-85 sm:grid lg:grid-cols-6/);
});

test('homepage hero keeps both CTA buttons on one row on mobile', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /flex w-full flex-row justify-center gap-2 sm:gap-4/);
  assert.match(source, /flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-orange-500/);
  assert.match(source, /flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white/);
  assert.doesNotMatch(source, /flex w-full flex-col justify-center gap-3 sm:flex-row/);
});

test('homepage simple process intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /<div className="text-center md:text-left">\s*<p className="mb-2 flex items-center justify-center gap-2 text-sm font-black uppercase text-orange-600 md:justify-start">/);
  assert.match(source, /<h2 className="text-3xl font-black sm:text-4xl">Call, confirm, and clear the space\.<\/h2>/);
  assert.doesNotMatch(source, /<div>\s*<p className="mb-2 flex items-center gap-2 text-sm font-black uppercase text-orange-600">\s*<Clock size=\{18\} \/>\s*Simple process/);
});

test('homepage simple process cards use a compact mobile step layout only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /grid gap-3 sm:grid-cols-3 sm:gap-4/);
  assert.match(source, /relative flex items-start gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 pl-5 text-left shadow-sm transition sm:block sm:bg-slate-50 sm:p-5 sm:pl-5 sm:shadow-none/);
  assert.match(source, /absolute inset-y-0 left-0 w-1 bg-orange-600 sm:hidden/);
  assert.match(source, /flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white shadow-sm sm:mb-5 sm:h-12 sm:w-12 sm:rounded-md sm:shadow-none/);
  assert.match(source, /<div className="min-w-0 flex-1 sm:min-w-full">/);
  assert.doesNotMatch(source, /<article key=\{step\.title\} className="rounded-lg border border-slate-200 bg-slate-50 p-5">/);
});

test('homepage services grid lists the complete what we remove set', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  [
    'Furniture removal',
    'Appliances',
    'Construction debris',
    'Basement cleanouts',
    'Garage cleanouts',
    'Yard waste',
    'Estate cleanouts',
    'General junk removal',
  ].forEach((label) => {
    assert.match(source, new RegExp(label));
  });
});

test('homepage trust strip matches the four simple proof points', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  [
    'Same-Day Service',
    'Locally Owned',
    'No Hidden Fees',
    'Heavy Lifting Included',
  ].forEach((label) => {
    assert.match(source, new RegExp(label));
  });

  assert.match(source, /justify-between/);
  assert.doesNotMatch(source, /rounded-md bg-slate-50 px-3 py-4/);
});

test('homepage trust strip uses a compact two-column mobile layout', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5/);
  assert.match(source, /md:flex md:flex-row md:items-center md:justify-between/);
  assert.match(source, /text-sm font-bold leading-tight text-slate-950 md:text-base/);
});

test('homepage real work preview does not show work photo badges', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, />OUR WORK</);
  assert.doesNotMatch(source, />Real work</);
  assert.doesNotMatch(source, /Work photo/);
});

test('homepage real work preview intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /mb-10 flex flex-col justify-between gap-4 text-center md:flex-row md:items-end md:text-left/);
  assert.match(source, /inline-flex items-center justify-center gap-2 font-black text-orange-300 hover:text-orange-200 md:justify-start/);
  assert.match(source, /<h2 className="max-w-2xl text-3xl font-black sm:text-4xl">\s*A quick look at recent cleanouts, hauling jobs, and debris removal\./);
});

test('homepage service coverage intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  assert.match(source, /<div className="text-center md:text-left">\s*<p className="mb-2 flex items-center justify-center gap-2 text-sm font-black uppercase text-orange-600 md:justify-start">/);
  assert.match(source, /<h2 className="text-3xl font-black sm:text-4xl">Serving Brooklyn, Rockaways, and South Queens\.<\/h2>/);
  assert.match(source, /mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-slate-800 md:justify-start/);
});

test('homepage service area list uses compact route chips on mobile and desktop', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');
  const areaListSource = source.slice(
    source.indexOf('<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">'),
    source.indexOf('<section className="bg-slate-50 px-4 py-16 sm:py-20">')
  );

  assert.match(areaListSource, /rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4/);
  assert.match(areaListSource, /grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3/);
  assert.match(areaListSource, /flex min-h-12 items-center gap-2 rounded-md border border-orange-100 bg-white px-3 py-3 text-left text-xs font-black text-slate-800 shadow-sm transition hover:-translate-y-0\.5 hover:border-orange-200 hover:shadow-md sm:min-h-14 sm:gap-3 sm:px-4 sm:py-4 sm:text-sm/);
  assert.match(areaListSource, /flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600 sm:h-8 sm:w-8/);
  assert.match(areaListSource, /<MapPin size=\{14\} aria-hidden="true" \/>/);
  assert.doesNotMatch(areaListSource, /sm:hidden/);
  assert.doesNotMatch(areaListSource, /sm:border-0/);
  assert.doesNotMatch(areaListSource, /sm:justify-center/);
  assert.doesNotMatch(areaListSource, /rounded-md bg-white px-4 py-4 text-center text-sm font-black text-slate-800 shadow-sm/);
});

test('homepage real work preview uses current Photos and Videos folder media', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'page.js'), 'utf8');

  [
    'WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    'WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    'WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    'WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    'May 8, 2026 jj.mp4',
  ].forEach((filename) => {
    assert.match(source, new RegExp(filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });

  [
    'June 29, 2026 JJ.jpg',
    'July 1, 2026 jj.jpg',
    'May 25, 2026 jj.png',
    'June 15, 2026 jj.jpg',
  ].forEach((filename) => {
    assert.doesNotMatch(source, new RegExp(filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });
});
