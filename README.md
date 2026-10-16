# Lab Hub

Homepage of `artificialsi.tech`. Lists ten practice projects, each with its own page.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind, Vitest, GitHub Actions, Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command                | What it does                      |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the dev server              |
| `npm run build`        | Production build                  |
| `npm run lint`         | ESLint                            |
| `npm test`             | Vitest                            |
| `npm run format`       | Prettier (writes files)           |
| `npm run format:check` | Prettier (check only, used in CI) |

## Structure

```
lab-hub/
├── content/               # Architecture notes, one markdown file per project slug
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Theme script, header, SEO defaults
│   │   ├── page.tsx       # Project grid
│   │   ├── not-found.tsx  # 404 page
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── projects/[slug]/page.tsx
│   ├── components/        # Header, ThemeToggle, ProjectCard, StatusBadge
│   ├── data/projects.ts   # The 10 projects (typed) + tests
│   └── lib/               # site config, markdown loader
└── .github/workflows/ci.yml
```

## Edit things

- **Change a project or its status:** edit `src/data/projects.ts` (set `status: 'live'` when it ships).
- **Set your GitHub username:** change `GITHUB_USER` at the top of `src/data/projects.ts`.
- **Write architecture notes:** edit `content/[slug].md`.
- **Add an 11th project:** add an entry to `projects.ts` and a matching `content/[slug].md`.
  The tests fail if either is missing.

## Deploy

See [DEPLOY.md](./DEPLOY.md).
