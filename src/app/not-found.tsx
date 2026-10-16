import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="font-mono text-sm text-slate-500 dark:text-slate-400">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        That page does not exist in the lab (yet).
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
      >
        Back to all projects
      </Link>
    </div>
  );
}
