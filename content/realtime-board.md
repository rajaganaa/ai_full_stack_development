## Goal

Several people open one board and see notes and cursors update live.

## Architecture

- Node + Express + Socket.io, one room per board id.
- Typed events: `note:create`, `note:update`, `note:delete`, `board:state`.
- Presence and cursors are throttled on the client to about 20 updates per second.
- Redis (Upstash) adapter so two server instances share one board.

## Key decisions

- **Version number on every note:** stale updates are rejected with a `conflict` event instead of silently overwriting.
- **Optimistic UI:** the client applies edits instantly and rolls back on conflict.
