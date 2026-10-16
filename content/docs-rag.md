## Goal

Upload PDFs, ask questions, get streamed answers with page citations.

## Architecture

- Express + TypeScript + PostgreSQL with the `pgvector` extension.
- Ingestion: extract text per page, split into overlapping chunks, embed, store.
- Retrieval: cosine-similarity search (top 5), limited to the signed-in user's documents.
- Answers stream to a React (Vite) chat page over Server-Sent Events.

## Key decisions

- **Retrieved text is untrusted data** in the prompt, to resist prompt injection from poisoned PDFs.
- **Evaluation script** reports hit rate at top 5 and answer correctness.
