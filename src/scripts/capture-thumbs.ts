import { chromium, devices } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const INPUT_FILE = join('src', 'data', 'projects.raw.json');
const THUMB_DIR = join('public', 'thumbs');

interface RawProject {
  slug: string;
  name: string;
  url: string;
}

async function captureThumb(url: string, slug: string): Promise<boolean> {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['Desktop Chrome'],
    viewport: { width: 1200, height: 800 },
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(2000);

    const screenshotPath = join(THUMB_DIR, `${slug}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`  Captured: ${slug}.png`);
    return true;
  } catch (e) {
    console.warn(`  Failed: ${slug} - ${(e as Error).message}`);
    return false;
  } finally {
    await browser.close();
  }
}

async function main() {
  if (!existsSync(THUMB_DIR)) {
    mkdirSync(THUMB_DIR, { recursive: true });
  }

  const projects: RawProject[] = JSON.parse(readFileSync(INPUT_FILE, 'utf-8'));
  let success = 0;

  for (const p of projects) {
    console.log(`Capturing: ${p.name}...`);
    if (await captureThumb(p.url, p.slug)) success++;
  }

  console.log(`\nDone: ${success}/${projects.length} thumbnails captured`);
}

main().catch(console.error);