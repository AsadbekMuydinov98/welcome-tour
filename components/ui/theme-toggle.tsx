'use client';

import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
	const { isDark, toggleTheme } = useTheme();

	const dark = isDark();

	return <Switch defaultChecked={dark} onCheckedChange={toggleTheme} className='data-[state=checked]:bg-amber-500' />;
}
