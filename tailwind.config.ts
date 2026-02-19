import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				muted: 'var(--muted)',
				card: 'var(--card)',
				border: 'var(--border)',
				accent: 'var(--accent)',
			},
		},
	},
};

export default config;
