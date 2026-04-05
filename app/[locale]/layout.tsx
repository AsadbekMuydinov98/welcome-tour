import { getDictionary } from '@/lib/getDictionary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Locale } from '@/lib/i18n';

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	const safeLocale = locale as Locale;

	const dict = await getDictionary(safeLocale);

	return (
		<>
			<Navbar dict={dict} locale={safeLocale} />
			{children}
			<Footer dict={dict} locale={safeLocale} />
		</>
	);
}
