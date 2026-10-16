## Goal

A real client portal for my freelance business, AI Vision.

## Architecture

- pnpm monorepo: `apps/api`, `apps/web`, `packages/shared`.
- Express + TypeScript + Prisma + PostgreSQL; roles `ADMIN` and `CLIENT`.
- File uploads to Azure Blob Storage using short-lived SAS URLs.
- AI assistant with tenant-scoped tools; email drafts need admin approval.
- Azure Container Apps deployed with Terraform and GitHub Actions (OIDC).

## Key decisions

- **Organization id comes from the session**, never from the model or the request body.
- **Cost control:** smallest database tier, a budget alert and a runbook to stop everything.

This project uses a different domain, `aivisionlabs.tech`.
