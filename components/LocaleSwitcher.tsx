'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/lib/i18n';

export function LocaleSwitcher() {
	const pathname = usePathname();

	if (!pathname) return null;

	const segments = pathname.split('/');
	const currentLocale = segments[1];

	return (
		<div className='flex gap-2'>
			{locales.map(locale => {
				const newPath = ['', locale, ...segments.slice(2)].join('/');

				const isActive = locale === currentLocale;

				return (
					<Link
						key={locale}
						href={newPath}
						className={`px-2 py-1 text-sm rounded-md border transition
              ${isActive ? 'bg-amber-500 text-white border-amber-500' : 'hover:bg-muted'}`}
					>
						{locale.toUpperCase()}
					</Link>
				);
			})}
		</div>
	);
}
