import { Dictionary } from '@/types/dictionary';

type NavKey = keyof Dictionary['nav'];

export const NAV_LINKS: { key: NavKey; href: string }[] = [
	{ key: 'tours', href: '/tours' },
	{ key: 'about', href: '/about' },
	{ key: 'contact', href: '/contact' },
];
