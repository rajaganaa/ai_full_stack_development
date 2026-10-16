import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  // Dark mode is controlled by a "dark" class on <html> (see ThemeToggle).
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

export default config;
