import { describe, expect, it } from 'vitest';
import { projects } from '@/data/projects';
import { getArchitectureNotes } from './content';

describe('architecture notes', () => {
  it('exists for every project', () => {
    for (const project of projects) {
      expect(
        getArchitectureNotes(project.slug),
        `content/${project.slug}.md`,
      ).not.toBeNull();
    }
  });

  it('rejects unsafe slugs', () => {
    expect(getArchitectureNotes('../package')).toBeNull();
  });
});
