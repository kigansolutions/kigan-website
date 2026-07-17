import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

function nextIndex() {
  const files = fs.readdirSync(outDir).filter((f) => f.startsWith('screenshot-'));
  const nums = files.map((f) => {
    const m = f.match(/^screenshot-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  });
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

const n = nextIndex();
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath = path.join(outDir, filename);

const width = process.env.SHOT_WIDTH ? parseInt(process.env.SHOT_WIDTH, 10) : 1440;
const height = process.env.SHOT_HEIGHT ? parseInt(process.env.SHOT_HEIGHT, 10) : 900;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise((r) => setTimeout(r, 7500)); // let the hero's word-cascade animation finish (~6.3s total)

// scroll through the full page to trigger any IntersectionObserver reveals
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let total = 0;
    const distance = 400;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      total += distance;
      if (total >= document.body.scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, 80);
  });
});
await new Promise((r) => setTimeout(r, 600));
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 300));

// force final resting state so mid-transition frames (e.g. from the viewport
// resize puppeteer does internally for fullPage capture) never get captured
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  const style = document.createElement('style');
  style.textContent = '*{transition:none!important;animation-play-state:paused!important;}';
  document.head.appendChild(style);
});

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved ${outPath}`);
