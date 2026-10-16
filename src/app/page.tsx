import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function HomePage() {
  const liveCount = projects.filter((p) => p.status === 'live').length;

  return (
    <div>
      <section className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Lab Hub</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          My practice domain, <span className="font-mono">artificialsi.tech</span>. Ten
          full-stack projects, each running on its own subdomain.
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {liveCount} of {projects.length} live
        </p>
      </section>

      <section aria-label="Projects" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} number={index + 1} />
        ))}
      </section>
    </div>
  );
}
