## Goal

Short links that redirect fast, with click analytics that never slow a redirect down.

## Architecture

- Express + PostgreSQL (Prisma) for links, Redis as a redirect cache.
- Clicks are pushed to a BullMQ queue; a worker writes them to the database.
- React (Vite) + Recharts dashboard: clicks per day, top referrers, device split.

## Key decisions

- **Cache first:** redirects are served from Redis; the `X-Cache` header shows HIT or MISS.
- **No raw IP addresses stored:** only referrer host, device type and country.
- **Rate limits:** stricter on link creation than on redirects.
