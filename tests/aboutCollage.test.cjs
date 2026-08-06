const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('about collage includes the uploaded work media from Photos and Videos', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');

  [
    'WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    'WhatsApp Image 2026-04-20 at 11.22.59.jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.43 PM (2).jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.43 PM (1).jpeg',
    'WhatsApp Image 2026-04-28 at 10.43.41 PM.jpeg',
    'WhatsApp Image 2026-04-28 at 10.46.06 PM.jpeg',
    'WhatsApp Image 2026-04-28 at 10.46.12 PM.jpeg',
    'WhatsApp Image 2026-05-26 at 10.35.19 AM (1).jpeg',
    'WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    'WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    'WhatsApp Image 2026-05-25 at 12.19.19 AM (2).jpeg',
    'WhatsApp Image 2026-05-25 at 12.19.20 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.31.11 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    'WhatsApp Image 2026-05-18 at 10.34.36 AM.jpeg',
    'WhatsApp Image 2026-05-12 at 10.08.27 PM.jpeg',
    'July 20, 2026 jj.mp4',
    'July 3, 2026 JJ.mp4',
    'June 19, 2026 jj.mp4',
    'May 1, 2026 JJ.mp4',
    'May 22, 2026 JJ.mp4',
    'May 8, 2026 jj.mp4',
  ].forEach((filename) => {
    assert.match(source, new RegExp(filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });

  assert.doesNotMatch(source, /August 5, 2026 jj\.jpg/);
  assert.doesNotMatch(source, /June 22, 2026 JJ\.jpg/);
});

test('about commitment cards include cursor-follow animation styling', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');

  assert.match(source, /handleCommitmentMouseMove/);
  assert.match(source, /--cursor-x/);
  assert.match(source, /--cursor-y/);
  assert.match(source, /radial-gradient\(circle at var\(--cursor-x, 50%\) var\(--cursor-y, 50%\)/);
  assert.match(source, /hover:-translate-y-1/);
});

test('about collage uses unique media src values for React keys', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');
  const collageRender = source.slice(
    source.indexOf('{collageItems.map((item) => {'),
    source.indexOf('{item.type === \'video\' ? (')
  );

  assert.match(collageRender, /key=\{`\$\{item\.type\}-\$\{item\.src\}`\}/);
  assert.doesNotMatch(collageRender, /key=\{`\$\{item\.type\}-\$\{item\.title\}`\}/);
});

test('about intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');
  const aboutIntro = source.slice(
    source.indexOf('{/* ABOUT CONTENT */}'),
    source.indexOf('<div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">')
  );

  assert.match(aboutIntro, /<div className="text-center lg:text-left">/);
  assert.match(aboutIntro, /mb-5 flex items-center justify-center gap-3 font-semibold text-orange-600 lg:justify-start/);
  assert.match(aboutIntro, /mb-4 text-lg leading-relaxed text-gray-600/);
  assert.match(aboutIntro, /text-lg leading-relaxed text-gray-600/);
});

test('about commitment intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');
  const commitmentSection = source.slice(
    source.indexOf('{/* COMMITMENT */}'),
    source.indexOf('<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">')
  );

  assert.match(commitmentSection, /mb-10 max-w-3xl text-center md:text-left/);
  assert.match(commitmentSection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 md:justify-start/);
  assert.match(commitmentSection, /mx-auto text-lg leading-relaxed text-gray-600 md:mx-0/);
});

test('about work gallery intro is centered on mobile only', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'app', 'about', 'page.js'), 'utf8');
  const gallerySection = source.slice(
    source.indexOf('{/* WORK GALLERY */}'),
    source.indexOf('<div className="columns-1 sm:columns-2 lg:columns-4')
  );

  assert.match(gallerySection, />OUR WORK</);
  assert.doesNotMatch(gallerySection, />Photos & Videos of Our Work</);
  assert.match(gallerySection, /mb-10 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left/);
  assert.match(gallerySection, /mb-3 flex items-center justify-center gap-3 font-semibold text-orange-300 md:justify-start/);
  assert.match(gallerySection, /mx-auto max-w-2xl text-lg leading-relaxed text-white\/75 md:mx-0/);
});
