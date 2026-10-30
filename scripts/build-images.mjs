// Builds optional responsive WebP copies of the current portfolio portrait.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const portrait = sharp('public/assets/profile.png');

for (const w of [1100, 720, 420]) {
  await portrait.clone().resize({ width: w }).webp({ quality: 86 }).toFile(`${OUT}/portrait-${w}.webp`);
}

console.log('Responsive portraits built from public/assets/profile.png');
