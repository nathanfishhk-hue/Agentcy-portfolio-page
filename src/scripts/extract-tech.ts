import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const INPUT_FILE = join('src', 'data', 'projects.raw.json');
const OUTPUT_FILE = join('src', 'data', 'projects.enriched.json');

const TECH_KEYWORDS = [
  'react', 'next.js', 'nextjs', 'vue', 'svelte', 'solid', 'angular',
  'typescript', 'javascript', 'tailwind', 'css', 'styled-components', 'emotion',
  'node', 'nodejs', 'deno', 'bun', 'express', 'fastify', 'hono', 'trpc',
  'postgresql', 'postgres', 'mysql', 'sqlite', 'mongodb', 'redis',
  'prisma', 'drizzle', 'typeorm', 'mongoose', 'sql',
  'vercel', 'netlify', 'aws', 'gcp', 'azure', 'docker', 'kubernetes',
  'supabase', 'firebase', 'planetscale', 'neon', 'clerk', 'auth0', 'nextauth',
  'graphql', 'rest', 'grpc', 'stripe', 'paypal',
  'vitest', 'jest', 'playwright', 'cypress', 'testing-library',
  'golang', 'go', 'rust', 'python', 'java', 'kotlin',
  'swc', 'vite', 'webpack', 'esbuild', 'turbopack',
];

async function extractTechStack(url: string): Promise<string[]> {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const html = await page.content();
    const text = await page.evaluate(() => document.body.innerText);
    const combined = (html + ' ' + text).toLowerCase();

    const found = new Set<string>();
    for (const kw of TECH_KEYWORDS) {
      if (combined.includes(kw.toLowerCase())) {
        const display = kw === 'next.js' || kw === 'nextjs' ? 'Next.js' :
                        kw === 'postgresql' || kw === 'postgres' ? 'PostgreSQL' :
                        kw === 'golang' ? 'Go' :
                        kw === 'node' || kw === 'nodejs' ? 'Node.js' :
                        kw === 'css' ? 'CSS' :
                        kw.charAt(0).toUpperCase() + kw.slice(1);
        found.add(display);
      }
    }

    return Array.from(found).slice(0, 6);
  } catch {
    return [];
  } finally {
    await browser.close();
  }
}

interface RawProject {
  slug: string;
  name: string;
  url: string;
}

interface EnrichedProject extends RawProject {
  description: string;
  techStack: string[];
  category: 'AI' | 'SaaS' | 'Other';
  hasThumb: boolean;
}

async function main() {
  const projects: RawProject[] = JSON.parse(readFileSync(INPUT_FILE, 'utf-8'));
  const enriched: EnrichedProject[] = [];

  for (const p of projects) {
    console.log(`Extracting tech for: ${p.name}...`);
    const techStack = await extractTechStack(p.url);
    enriched.push({
      ...p,
      description: '', // manual edit later
      techStack,
      category: 'SaaS', // manual edit later
      hasThumb: false,
    });
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(enriched, null, 2));
  console.log(`Enriched -> ${OUTPUT_FILE}`);
}

main().catch(console.error);