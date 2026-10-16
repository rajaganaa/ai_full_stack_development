## Goal

A zero-knowledge vault: the server only ever stores ciphertext.

## Architecture

- Browser Web Crypto API: PBKDF2 key derivation, AES-GCM with a fresh IV per item.
- Express + PostgreSQL store ciphertext, IV, salt and item id per user.
- Login uses a separate hashed auth key, never the master password.
- Secure share: file encrypted in the browser, key kept in the URL `#fragment` so it never reaches the server.

## Key decisions

- **Honest limits:** PBKDF2 versus Argon2, XSS and clipboard risks are written down in `SECURITY.md`.
- **Expiring links** with a download cap and a cleanup job.
