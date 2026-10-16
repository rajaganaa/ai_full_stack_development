## Goal

A support assistant for a fake shop that can use tools, with a human approving risky actions.

## Architecture

- Node + TypeScript agent loop written by hand, no framework.
- Tools: `lookup_order`, `create_ticket`, `issue_refund`, each with a JSON schema and zod validation.
- `issue_refund` creates a pending action; an admin approves or rejects it in a React page.
- Every step is stored in `run_steps` and shown in a trace viewer.

## Key decisions

- **Tools check ownership:** an order must belong to the signed-in customer.
- **Hard limits:** a tool allow-list, a maximum step count and a token budget.
