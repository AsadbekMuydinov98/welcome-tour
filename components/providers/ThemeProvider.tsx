'use client';

import { createContext, useContext } from 'react';

type ThemeContextType = {
	isDark: () => boolean;
	toggleTheme: (checked: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const isDark = () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

	const toggleTheme = (checked: boolean) => {
		document.documentElement.classList.toggle('dark', checked);
		localStorage.setItem('theme', checked ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within ThemeProvider');
	return context;
}
