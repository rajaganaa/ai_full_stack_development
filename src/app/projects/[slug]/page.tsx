import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import StatusBadge from '@/components/StatusBadge';
import { getProject, projectUrl, projects } from '@/data/projects';
import { getArchitectureNotes } from '@/lib/content';

type Props = { params: { slug: string } };

// Only the slugs in src/data/projects.ts exist; anything else shows the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const url = projectUrl(project);
  const notes = getArchitectureNotes(project.slug);
  const linkClass =
    'inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800';

  return (
    <article className="max-w-3xl">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:underline dark:text-slate-400"
      >
        &larr; All projects
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>
      </header>

      <section className="mt-8" aria-labelledby="stack-heading">
        <h2
          id="stack-heading"
          className="text-sm font-semibold uppercase tracking-wide text-slate-500"
        >
          Stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="links-heading">
        <h2
          id="links-heading"
          className="text-sm font-semibold uppercase tracking-wide text-slate-500"
        >
          Links
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {url ? (
            project.status === 'live' ? (
              <a
                href={url}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {project.subdomain}
              </a>
            ) : (
              <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                {project.subdomain} (not live yet)
              </span>
            )
          ) : (
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Local only. This project is never deployed publicly.
            </span>
          )}
          <a
            href={project.repoUrl}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repo
          </a>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="notes-heading">
        <h2 id="notes-heading" className="text-2xl font-bold">
          Architecture notes
        </h2>
        {notes ? (
          <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
            <ReactMarkdown>{notes}</ReactMarkdown>
          </div>
        ) : (
          <p className="mt-4 text-slate-500 dark:text-slate-400">No notes written yet.</p>
        )}
      </section>
    </article>
  );
}
