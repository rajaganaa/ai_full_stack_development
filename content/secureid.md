## Goal

Learn how real login systems work by building one that my other projects can use.

## Architecture

- Express + TypeScript + Prisma + PostgreSQL.
- argon2id password hashing; 15-minute access JWTs signed with an asymmetric key and published at a JWKS endpoint.
- Rotating refresh tokens stored only as hashes, with token-family reuse detection.
- TOTP two-factor, Google sign-in (OAuth 2.0 + PKCE) and passkeys (WebAuthn).

## Key decisions

- **Reuse of an old refresh token revokes the whole family.**
- **Audit log** for logins, failures, password changes, 2FA changes and token reuse.
