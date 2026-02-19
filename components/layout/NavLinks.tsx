'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/navigation';

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{NAV_LINKS.map(link => {
				const active = pathname === link.href;

				return (
					<Link
						key={link.href}
						href={link.href}
						className={`transition ${active ? 'border-b-2 border-current pb-1' : 'hover:opacity-70'}`}
					>
						{link.label}
					</Link>
				);
			})}
		</>
	);
}
