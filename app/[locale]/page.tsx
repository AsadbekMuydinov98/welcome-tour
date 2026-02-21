import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';
import Hero from '@/components/home/Hero';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<>
			<Hero dict={dict} locale={locale} />
			<FeaturedTours dict={dict} locale={locale} />
			<WhyChooseUs dict={dict} />
		</>
	);
}
