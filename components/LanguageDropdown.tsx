'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeLabels, localeFlags, type Locale } from '@/lib/i18n';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function LanguageDropdown() {
	const pathname = usePathname();
	const router = useRouter();

	const segments = pathname.split('/');

	// ✅ SAFE locale aniqlash
	const currentLocale: Locale = locales.includes(segments[1] as Locale) ? (segments[1] as Locale) : 'en';

	function changeLanguage(locale: Locale) {
		const newSegments = [...segments];

		if (locales.includes(currentLocale)) {
			newSegments[1] = locale;
		} else {
			newSegments.splice(1, 0, locale);
		}

		const newPath = newSegments.join('/') || `/${locale}`;
		router.push(newPath);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='flex items-center gap-2'>
					<span>{localeFlags[currentLocale]}</span>
					<span className='uppercase'>{currentLocale}</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-44'>
				{locales.map(locale => (
					<DropdownMenuItem
						key={locale}
						onClick={() => changeLanguage(locale)}
						className='flex items-center justify-between cursor-pointer'
					>
						<div className='flex items-center gap-2'>
							<span>{localeFlags[locale]}</span>
							<span>{localeLabels[locale]}</span>
						</div>

						{currentLocale === locale && <Check className='w-4 h-4 text-primary' />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
