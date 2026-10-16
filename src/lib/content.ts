import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/** Reads content/[slug].md. Returns null when the file does not exist. */
export function getArchitectureNotes(slug: string): string | null {
  // Slugs come from our own data file, but never build a path from unchecked input.
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}
