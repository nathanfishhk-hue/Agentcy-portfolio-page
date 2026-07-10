import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Go up: src/scripts -> src -> portfolio -> agentcy (parent of portfolio)
const URL_DIR = join(__dirname, '..', '..', '..');
const OUTPUT_FILE = join(__dirname, '..', 'data', 'projects.raw.json');

interface RawProject {
  slug: string;
  name: string;
  url: string;
  filename: string;
}

function parseUrlFile(content: string): string | null {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('URL=')) {
      return line.slice(4).trim();
    }
  }
  return null;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  const entries = await readdir(URL_DIR);
  const urlFiles = entries.filter(f => f.endsWith('.url')).sort();

  const projects: RawProject[] = [];

  for (const file of urlFiles) {
    const content = await readFile(join(URL_DIR, file), 'utf-8');
    const url = parseUrlFile(content);
    const name = file.replace('.url', '');

    if (url) {
      projects.push({
        slug: slugify(name),
        name,
        url,
        filename: file,
      });
    } else {
      console.warn(`No URL found in ${file}`);
    }
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
  console.log(`Parsed ${projects.length} projects -> ${OUTPUT_FILE}`);
}

main().catch(console.error);