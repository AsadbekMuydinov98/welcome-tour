'use client';

import { useParams } from 'next/navigation';

export function useLocalePath() {
	const params = useParams();
	const locale = params.locale as string;

	function withLocale(path: string) {
		return `/${locale}${path}`;
	}

	return { locale, withLocale };
}
