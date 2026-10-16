import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-bold">Lab Hub</span>
          <span className="hidden font-mono text-xs text-slate-500 dark:text-slate-400 sm:inline">
            artificialsi.tech
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
