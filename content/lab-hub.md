## Goal

One front door for every practice project on `artificialsi.tech`.

## Architecture

- Next.js 14 App Router, statically generated. No database.
- Project list lives in one typed file, `src/data/projects.ts`.
- Each project page reads its notes from `content/[slug].md` at build time.
- Hosted on Vercel; DNS at name.com.

## Key decisions

- **Static over dynamic:** nothing here changes per visitor, so pages are built once and served from the edge.
- **Typed data file:** tests catch duplicate slugs and bad statuses before they reach production.
