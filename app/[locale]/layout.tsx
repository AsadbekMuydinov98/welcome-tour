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
	const { locale } = await params; // 🔥 SHU YER MUHIM

	const dict = await getDictionary(locale as Locale);

	return (
		<>
			<Navbar dict={dict} locale={locale} />
			{children}
			<Footer dict={dict} locale={locale} />
		</>
	);
}
