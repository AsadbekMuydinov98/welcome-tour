'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/navigation';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/lib/i18n';

type NavLinksProps = {
	dict: Dictionary;
	locale: Locale;
};

export default function NavLinks({ dict, locale }: NavLinksProps) {
	const pathname = usePathname();

	return (
		<>
			{NAV_LINKS.map(link => {
				const fullHref = `/${locale}${link.href}`;

				// 🔥 yaxshilangan active logic
				const active = pathname === fullHref || pathname.startsWith(fullHref + '/');

				return (
					<Link
						key={link.key}
						href={fullHref}
						className={`transition pb-1 ${
							active ? 'border-b-2 border-primary text-primary' : 'hover:text-primary text-foreground/80'
						}`}
					>
						{dict.nav[link.key]}
					</Link>
				);
			})}
		</>
	);
}
