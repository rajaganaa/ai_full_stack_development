## Goal

Learn to find and fix common web flaws on an app I own, on my own laptop.

## Architecture

- `VulnNotes`: Express + EJS + SQLite, bound to `127.0.0.1`, with a red warning banner.
- `VulnNotes-Fixed`: the same app with each flaw fixed and covered by tests.
- GitHub Actions runs CodeQL, `npm audit` and an OWASP ZAP baseline scan against the fixed app only.

## Key decisions

- **Never deployed.** This project stays on localhost by design, so it has no public address.
- Every flaw is tagged with a `// VULN-n` comment and listed in the README.
