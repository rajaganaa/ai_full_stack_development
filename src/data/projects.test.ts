import { describe, expect, it } from 'vitest';
import { PROJECT_STATUSES, projects } from './projects';

describe('projects data', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('uses only valid statuses', () => {
    for (const project of projects) {
      expect(PROJECT_STATUSES).toContain(project.status);
    }
  });
});
