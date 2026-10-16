'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // null until mounted, so server and first client render match.
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be blocked (private mode). The toggle still works for this visit.
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark ?? false}
      aria-label="Toggle dark theme"
      className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {dark === null ? 'Theme' : dark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
