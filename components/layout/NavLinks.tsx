'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/navigation';

type NavLinksProps = {
	dict: any;
	locale: string;
};


export default function NavLinks({ dict, locale }: NavLinksProps) {
	const pathname = usePathname();


	return (
		<>
			{NAV_LINKS.map(link => {
				const fullHref = `/${locale}${link.href}`;
				const active = pathname === fullHref;

				return (
					<Link
						key={link.key}
						href={fullHref}
						className={`transition ${active ? 'border-b-2 border-current pb-1' : 'hover:opacity-70'}`}
					>
						{dict.nav[link.key]}
					</Link>
				);
			})}
		</>
	);
}
