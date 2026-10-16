# Deploy Lab Hub to artificialsi.tech

## 1. Put the code on GitHub

```bash
git init
git add .
git commit -m "Initial Lab Hub"
git branch -M main
git remote add origin https://github.com/<your-username>/lab-hub.git
git push -u origin main
```

Open the **Actions** tab of the repo. The `CI` workflow should turn green (see "Check CI" below).

## 2. Import into Vercel

1. Sign in at vercel.com with GitHub.
2. **Add New → Project**, pick the `lab-hub` repo.
3. Framework is detected as Next.js. Leave the defaults and click **Deploy**.
4. You get a `lab-hub-xxxx.vercel.app` URL. Confirm it works before touching DNS.

## 3. Add the domain in Vercel

1. Project → **Settings → Domains**.
2. Add `artificialsi.tech`.
3. Add `www.artificialsi.tech` and choose **Redirect to `artificialsi.tech`** (308) so `www` forwards to the root domain.
4. Vercel shows the exact DNS records it wants. **Use the values shown there** if they differ from the ones below, because Vercel can change them.

## 4. DNS records at name.com

Domains → `artificialsi.tech` → **DNS Records**. Remove any old `A`, `ALIAS` or URL-forwarding records on `@` and `www` first (name.com adds parking records by default).

| Type  | Host                  | Answer / value         | TTL |
| ----- | --------------------- | ---------------------- | --- |
| A     | (blank, the root `@`) | `76.76.21.21`          | 300 |
| CNAME | `www`                 | `cname.vercel-dns.com` | 300 |

Back in Vercel, the domain status changes to **Valid Configuration**. This usually takes minutes, sometimes up to an hour.

## 5. Check HTTPS

- Open `https://artificialsi.tech`. You should see the padlock. Vercel issues the certificate by itself.
- `curl -I https://artificialsi.tech` returns `HTTP/2 200`.
- `curl -I https://www.artificialsi.tech` returns `308` with a `location:` header pointing to the root domain.
- `curl -I http://artificialsi.tech` redirects to `https://`.
- Also open `/sitemap.xml` and `/robots.txt`.

## 6. Add a subdomain later (example: tasks)

Add a record at name.com:

| Type  | Host    | Answer / value         | TTL |
| ----- | ------- | ---------------------- | --- |
| CNAME | `tasks` | `cname.vercel-dns.com` | 300 |

Then in the Vercel project that serves TaskFlow, **Settings → Domains → Add** `tasks.artificialsi.tech`.
If TaskFlow's API runs on Azure or Render instead, the CNAME points to the host that service gives you.
Repeat with `board`, `go`, `auth`, `vault`, `docs` and `agent`.

When a project goes live, set `status: 'live'` in `src/data/projects.ts` and push.

## Check CI on GitHub

1. Repo → **Actions** tab → latest run of **CI**.
2. Green tick = install, lint, test and build all passed. Click the run, then the `build` job, to see each step.
3. A red cross means a step failed: open the failing step to read the error. Run the same command locally (`npm run lint`, `npm test`, `npm run build`) to reproduce it.
4. Optional: Repo → **Settings → Branches** → require the `build` check before merging.

## Troubleshooting: "Invalid Configuration"

1. **Wrong or missing record.** Compare name.com's records with what Vercel shows under the domain. Fix the value, save, then click **Refresh** in Vercel.
2. **Old parking record still present.** An extra `A`, `ALIAS` or URL-forward on the same host conflicts. Delete it.
3. **Pointing at the wrong host.** The `A` record host must be blank or `@`, not `artificialsi.tech`. The `www` CNAME host is `www`, not `www.artificialsi.tech`.
4. **Nameservers elsewhere.** If the domain uses another provider's nameservers, records at name.com are ignored. Check the **Nameservers** tab at name.com.
5. **DNS has not propagated.** Wait 10 to 60 minutes. Check with `nslookup artificialsi.tech` or dnschecker.org.
6. **CAA records.** If you added any, they must allow `letsencrypt.org`, otherwise the certificate cannot be issued.
7. **Domain used in another Vercel project or account.** Remove it from the other project first.
8. **Trailing dot or `https://` typed into the value field.** Values are bare hostnames or IPs.
