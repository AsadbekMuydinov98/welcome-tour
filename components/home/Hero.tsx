import Link from 'next/link';

type HeroProps = {
	dict: any;
	locale: string;
};

export default function Hero({ dict, locale }: HeroProps) {
	return (
		<section className='relative h-screen min-h-162.5 flex items-center justify-center text-white'>
			<div
				className='absolute inset-0 bg-cover bg-center scale-105'
				style={{
					backgroundImage: "url('https://cdn.audleytravel.com/1050/748/79/1323355-registan-square-samarkand.webp')",
				}}
			/>

			<div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80' />

			<div className='relative z-10 text-center px-6 max-w-5xl'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>{dict.home.hero.title}</h1>

				<p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto'>{dict.home.hero.subtitle}</p>

				<div className='flex flex-col sm:flex-row gap-5 justify-center'>
					<Link
						href={`/${locale}/tours`}
						className='bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300'
					>
						{dict.home.featuredTours.viewAll}
					</Link>

					<Link
						href={`/${locale}/about`}
						className='border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300'
					>
						{dict.nav.about}
					</Link>
				</div>
			</div>

			<div className='absolute bottom-10 animate-bounce text-white text-sm'>↓</div>
		</section>
	);
}
