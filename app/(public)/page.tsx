import Link from 'next/link';
import { tours } from '@/lib/data/tours';
import TourCard from '@/components/tour/TourCard';

export default function HomePage() {
	return (
		<main className='overflow-hidden'>
			<HeroSection />
			<FeaturedTours />
		</main>
	);
}

function HeroSection() {
	return (
		<section className='relative h-screen min-h-162.5 flex items-center justify-center text-white'>
			{/* Background Image */}
			<div
				className='absolute inset-0 bg-cover bg-center scale-105'
				style={{ backgroundImage: "url('https://cdn.audleytravel.com/1050/748/79/1323355-registan-square-samarkand.webp')" }}
			/>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80' />

			{/* Content */}
			<div className='relative z-10 text-center px-6 max-w-5xl'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
					Discover the Timeless Beauty of Uzbekistan
				</h1>

				<p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto'>
					Experience ancient cities, breathtaking architecture, and authentic traditions in the heart of Central Asia.
				</p>

				<div className='flex flex-col sm:flex-row gap-5 justify-center'>
					<Link
						href='/tours'
						className='bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition duration-300'
					>
						Explore Tours
					</Link>

					<Link
						href='/about'
						className='border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300'
					>
						Learn More
					</Link>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-10 animate-bounce text-white text-sm'>↓ Scroll</div>
		</section>
	);
}

function FeaturedTours() {
	return (
		<section className='mx-auto max-w-7xl px-6 py-24'>
			<div className='flex justify-between items-center mb-12'>
				<h2 className='text-3xl font-bold'>Featured Tours</h2>

				<Link href='/tours' className='text-sm font-medium hover:underline'>
					View All →
				</Link>
			</div>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{tours.slice(0, 3).map(tour => (
					<TourCard key={tour.id} tour={tour} />
				))}
			</div>
		</section>
	);
}
