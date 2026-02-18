import { notFound } from 'next/navigation';
import { tours } from '@/lib/data/tours';

export default async function TourDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const tour = tours.find(t => t.slug === slug);

	if (!tour) return notFound();

	return (
		<main className='pt-20'>
			{/* Hero */}
			<section className='relative h-[60vh] flex items-center justify-center text-white'>
				<div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: "url('/images/hero-uzbekistan.jpg')" }} />
				<div className='absolute inset-0 bg-black/60' />

				<div className='relative z-10 text-center px-6'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>{tour.title}</h1>
					<p className='text-lg text-gray-200'>{tour.location}</p>
				</div>
			</section>

			{/* Content */}
			<section className='mx-auto max-w-5xl px-6 py-20'>
				<div className='grid md:grid-cols-3 gap-12'>
					{/* Description */}
					<div className='md:col-span-2 space-y-6'>
						<h2 className='text-2xl font-semibold'>About This Tour</h2>
						<p className='text-gray-600 leading-relaxed'>{tour.description}</p>
					</div>

					{/* Sidebar */}
					<div className='border rounded-2xl p-8 shadow-sm h-fit'>
						<p className='text-sm text-gray-500 mb-2'>Duration</p>
						<p className='mb-6 font-medium'>{tour.duration}</p>

						<p className='text-sm text-gray-500 mb-2'>Price</p>
						<p className='text-2xl font-bold mb-6'>${tour.price}</p>

						<button className='w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition'>Book Now</button>
					</div>
				</div>
			</section>
		</main>
	);
}
