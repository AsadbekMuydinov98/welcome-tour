'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminNavLinks } from './admin-nav';

export function AdminSidebar() {
	const pathname = usePathname();

	return (
		<aside className='w-64 border-r border-border bg-card p-6 space-y-6'>
			<div>
				<h2 className='text-lg font-semibold tracking-tight'>Admin Panel</h2>
				<p className='text-sm text-muted-foreground'>Management system</p>
			</div>

			<nav className='flex flex-col gap-2 text-sm'>
				{adminNavLinks.map(link => {
					const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));

					return (
						<Link
							key={link.href}
							href={link.href}
							className={`px-3 py-2 rounded-lg transition ${
								isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent hover:text-accent-foreground'
							}`}
						>
							{link.title}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
