export const PROJECT_STATUSES = ['planned', 'building', 'live'] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export interface Project {
  /** URL-safe id, used in /projects/[slug] and content/[slug].md */
  slug: string;
  name: string;
  /** Full host name such as "tasks.artificialsi.tech", or null when it is never public. */
  subdomain: string | null;
  stack: string[];
  status: ProjectStatus;
  repoUrl: string;
  summary: string;
}

// TODO: replace with your real GitHub username.
const GITHUB_USER = 'rajaganaa';
const repo = (name: string) => `https://github.com/rajaganaa/ai_full_stack_development.git`;

export const projects: Project[] = [
  {
    slug: 'lab-hub',
    name: 'Lab Hub',
    subdomain: 'artificialsi.tech',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    status: 'building',
    repoUrl: repo('lab-hub'),
    summary: 'This homepage. It lists every practice project and links to its subdomain.',
  },
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    subdomain: 'tasks.artificialsi.tech',
    stack: ['Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'React', 'TanStack Query'],
    status: 'planned',
    repoUrl: repo('taskflow'),
    summary: 'A multi-team Kanban task manager with OWNER, MEMBER and VIEWER roles.',
  },
  {
    slug: 'realtime-board',
    name: 'Realtime Collaboration Board',
    subdomain: 'board.artificialsi.tech',
    stack: ['Socket.io', 'Redis (Upstash)', 'React', 'TypeScript'],
    status: 'planned',
    repoUrl: repo('realtime-board'),
    summary: 'Sticky notes, movements and cursors update live for everyone on the board.',
  },
  {
    slug: 'link-shortener',
    name: 'Link Shortener with Analytics',
    subdomain: 'go.artificialsi.tech',
    stack: ['Express', 'PostgreSQL', 'Redis', 'BullMQ', 'React', 'Recharts'],
    status: 'planned',
    repoUrl: repo('link-shortener'),
    summary: 'Short links with Redis-cached redirects and a background click dashboard.',
  },
  {
    slug: 'secureid',
    name: 'SecureID Auth Service',
    subdomain: 'auth.artificialsi.tech',
    stack: ['Express', 'TypeScript', 'PostgreSQL', 'argon2', 'JWT', 'TOTP', 'WebAuthn'],
    status: 'planned',
    repoUrl: repo('secureid'),
    summary:
      'My own login service: rotating refresh tokens, 2FA, Google sign-in and passkeys.',
  },
  {
    slug: 'vault',
    name: 'Encrypted Vault and Secure Share',
    subdomain: 'vault.artificialsi.tech',
    stack: ['Web Crypto API', 'React', 'Express', 'PostgreSQL'],
    status: 'planned',
    repoUrl: repo('vault'),
    summary:
      'A zero-knowledge password vault where the server only ever stores ciphertext.',
  },
  {
    slug: 'owasp-lab',
    name: 'OWASP Lab: Vulnerable and Fixed',
    subdomain: null,
    stack: ['Express', 'EJS', 'SQLite', 'GitHub Actions', 'OWASP ZAP'],
    status: 'planned',
    repoUrl: repo('owasp-lab'),
    summary:
      'A deliberately flawed training app and its fixed twin. Runs on localhost only.',
  },
  {
    slug: 'docs-rag',
    name: 'Chat With Your Documents (RAG)',
    subdomain: 'docs.artificialsi.tech',
    stack: ['Express', 'TypeScript', 'PostgreSQL', 'pgvector', 'React', 'SSE'],
    status: 'planned',
    repoUrl: repo('docs-rag'),
    summary:
      'Upload PDFs and ask questions. Answers stream in live and cite source pages.',
  },
  {
    slug: 'support-agent',
    name: 'Support Agent With Tools and Approvals',
    subdomain: 'agent.artificialsi.tech',
    stack: ['Node', 'TypeScript', 'LLM function calling', 'PostgreSQL', 'React'],
    status: 'planned',
    repoUrl: repo('support-agent'),
    summary:
      'A support assistant that calls tools; risky actions wait for human approval.',
  },
  {
    slug: 'ai-vision-portal',
    name: 'AI Vision Client Portal (Capstone)',
    subdomain: 'portal.aivisionlabs.tech',
    stack: ['pnpm monorepo', 'Express', 'React', 'PostgreSQL', 'Azure', 'Terraform'],
    status: 'planned',
    repoUrl: repo('ai-vision-portal'),
    summary:
      'A real client portal for my freelance business, deployed on Azure with Terraform.',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Public https URL of a project, or null when it has no public host. */
export function projectUrl(project: Project): string | null {
  return project.subdomain ? `https://${project.subdomain}` : null;
}
