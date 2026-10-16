export const siteName = 'Lab Hub';

export const siteDescription =
  'The homepage of my practice domain artificialsi.tech: ten full-stack projects, each on its own subdomain.';

// Change with NEXT_PUBLIC_SITE_URL in Vercel if the domain ever changes.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artificialsi.tech'
).replace(/\/$/, '');
