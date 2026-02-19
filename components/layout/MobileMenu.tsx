'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/navigation';

export default function MobileMenu({ open }: { open: boolean }) {
	if (!open) return null;

	return (
		<div className='md:hidden bg-white text-black px-6 py-6 space-y-4 shadow-lg'>
			{NAV_LINKS.map(link => (
				<Link key={link.href} href={link.href} className='block'>
					{link.label}
				</Link>
			))}
		</div>
	);
}
