import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;

	const dict = await getDictionary(locale);

	return (
		<section className='mx-auto max-w-5xl px-6 py-20'>
			<h1 className='text-3xl font-bold mb-8'>{dict.about.title}</h1>

			<div className='space-y-6 text-gray-600 leading-relaxed'>
				<p>{dict.about.paragraph1}</p>
				<p>{dict.about.paragraph2}</p>
				<p>{dict.about.paragraph3}</p>
			</div>
		</section>
	);
}
