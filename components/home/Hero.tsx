import Link from 'next/link';
import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/lib/i18n';

type HeroProps = {
	dict: Dictionary;
	locale: Locale;
};

export default function Hero({ dict, locale }: HeroProps) {
	return (
		<section className='relative h-screen min-h-162.5 flex items-center justify-center text-white'>
			<div
				className='absolute inset-0 bg-cover bg-center scale-100'
				style={{
					backgroundImage:
						"url('https://www.tourstouzbekistan.com/uploads/2021%20photos/Samarkand/registan_samarkand_anurtour.jpeg')",
				}}
			/>

			{/* Overlay (theme-safe) */}
			<div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-black/80 dark:from-black/70 dark:via-black/80 dark:to-black/90' />

			<div className='relative z-10 text-center px-6 max-w-5xl'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>{dict.home.hero.title}</h1>

				<p className='text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-10 max-w-2xl mx-auto'>{dict.home.hero.subtitle}</p>

				<div className='flex flex-col sm:flex-row gap-5 justify-center'>
					<Link
						href={`/${locale}/tours`}
						className='bg-white text-black dark:bg-primary dark:text-primary-foreground px-10 py-4 rounded-2xl font-semibold hover:opacity-90 transition duration-300'
					>
						{dict.home.featuredTours.viewAll}
					</Link>

					<Link
						href={`/${locale}/about`}
						className='border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black dark:hover:bg-primary dark:hover:text-primary-foreground transition duration-300'
					>
						{dict.nav.about}
					</Link>
				</div>
			</div>

			<div className='absolute bottom-10 animate-bounce text-white/80 text-sm'>↓</div>
		</section>
	);
}
