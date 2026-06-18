import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const images = [
  { file: 'hero-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'services-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'work-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'pricing-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'about-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'about-bg.png', type: 'hero', maxW: 1920 },
  { file: 'contact-bg.jpg', type: 'hero', maxW: 1920 },
  { file: 'cory.jpg', type: 'photo', maxW: 1200 },
];

const logs = [];

for (const img of images) {
  const srcPath = path.join(imagesDir, img.file);
  const baseName = path.parse(img.file).name;
  const outPath = path.join(imagesDir, `${baseName}.webp`);

  if (!fs.existsSync(srcPath)) {
    logs.push(`⚠ SKIP  ${img.file} — not found`);
    continue;
  }

  const srcStat = fs.statSync(srcPath);
  const srcSizeKB = (srcStat.size / 1024).toFixed(1);

  const metadata = await sharp(srcPath).metadata();

  let pipeline = sharp(srcPath);

  if (metadata.width > img.maxW) {
    pipeline = pipeline.resize({ width: img.maxW, withoutEnlargement: true });
  }

  await pipeline
    .webp({ quality: 75, effort: 4 })
    .toFile(outPath);

  const outStat = fs.statSync(outPath);
  const outSizeKB = (outStat.size / 1024).toFixed(1);
  const pct = ((1 - outStat.size / srcStat.size) * 100).toFixed(1);

  logs.push(
    `✅ ${img.file.padEnd(20)} ${srcSizeKB.padStart(8)} KB → ${outSizeKB.padStart(7)} KB  (${pct.padStart(5)}% saved)`
  );
}

// Logo: create optimized variant alongside original (never overwrite master)
const logoSrc = path.join(imagesDir, 'logo.png');
const logoIcon = path.join(imagesDir, 'logo-icon.png');

if (fs.existsSync(logoSrc)) {
  const srcStat = fs.statSync(logoSrc);
  const srcSizeKB = (srcStat.size / 1024).toFixed(1);

  await sharp(logoSrc)
    .resize({ width: 180, withoutEnlargement: true })
    .png({ quality: 80, effort: 9 })
    .toFile(logoIcon);

  const outStat = fs.statSync(logoIcon);
  const outSizeKB = (outStat.size / 1024).toFixed(1);
  const pct = ((1 - outStat.size / srcStat.size) * 100).toFixed(1);

  logs.push(
    `✅ logo-icon.png${' '.repeat(9)} ${srcSizeKB.padStart(8)} KB → ${outSizeKB.padStart(7)} KB  (${pct.padStart(5)}% saved)`
  );
}

// Summary
console.log('\n=== Image Optimization Report ===\n');
logs.forEach(l => console.log(l));

const totalBefore = logs.reduce((sum, l) => {
  const m = l.match(/([\d.]+) KB →/);
  return sum + (m ? parseFloat(m[1]) : 0);
}, 0);
const totalAfter = logs.reduce((sum, l) => {
  const m = l.match(/→\s+([\d.]+) KB/);
  return sum + (m ? parseFloat(m[1]) : 0);
}, 0);
const totalPct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

console.log(`\nTotal: ${totalBefore.toFixed(1)} KB → ${totalAfter.toFixed(1)} KB  (${totalPct}% saved)`);
console.log('\nOriginals preserved. WebP files generated alongside originals.');
console.log('To verify quality, open the .webp files in a browser or image viewer.');
