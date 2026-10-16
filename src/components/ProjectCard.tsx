import Link from 'next/link';
import type { Project } from '@/data/projects';
import StatusBadge from './StatusBadge';

export default function ProjectCard({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm dark:border-slate-800 dark:hover:border-slate-600"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
          Project {number} of 10
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h2 className="mt-3 text-lg font-semibold group-hover:underline">{project.name}</h2>
      <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
        {project.subdomain ?? 'local only'}
      </p>
      <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <li
            key={tech}
            className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
