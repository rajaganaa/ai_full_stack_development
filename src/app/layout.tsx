import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | artificialsi.tech`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: 'website',
  },
};

// Runs before first paint so the saved theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">{children}</main>
        <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-sm text-slate-500 dark:text-slate-400 sm:px-6">
          Ten practice projects. One domain. Built step by step.
        </footer>
      </body>
    </html>
  );
}
