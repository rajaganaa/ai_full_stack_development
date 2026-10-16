## Goal

A multi-team Kanban board where every query is limited to the signed-in user's own team.

## Architecture

- Express + TypeScript API with Prisma and PostgreSQL (Neon).
- Teams have boards, boards have columns, columns have tasks.
- Roles: `OWNER`, `MEMBER`, `VIEWER`. Middleware checks the role before any write.
- React (Vite) frontend with TanStack Query and drag and drop.

## Key decisions

- **Team filter on every query:** cross-team access returns 404, not 403, so ids cannot be probed.
- **httpOnly cookie for the JWT:** the token is never readable from JavaScript.
