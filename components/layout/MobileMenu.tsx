'use client';

import Link from 'next/link';

import { NAV_LINKS } from '@/lib/navigation';
import { ThemeToggle } from '../ui/theme-toggle';
import { LanguageDropdown } from '../LanguageDropdown';
import AuthModal from '../auth-modal/auth';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/lib/i18n';

type MobileMenuProps = {
	open: boolean;
	dict: Dictionary;
	locale: Locale;
};

export default function MobileMenu({ open, dict, locale }: MobileMenuProps) {
	if (!open) return null;

	return (
		<div className='md:hidden bg-background/95 backdrop-blur-md text-foreground px-6 py-6 space-y-4 border-t shadow-lg'>
			{/* Links */}
			{NAV_LINKS.map(link => {
				const fullHref = `/${locale}${link.href}`;

				return (
					<Link key={link.key} href={fullHref} className='block text-lg font-medium hover:text-primary transition'>
						{dict.nav[link.key]}
					</Link>
				);
			})}

			{/* Controls */}
			<div className='pt-4 border-t flex flex-col gap-4'>
				<ThemeToggle />
				<LanguageDropdown />
				<AuthModal />
			</div>
		</div>
	);
}
