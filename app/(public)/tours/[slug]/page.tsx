import { notFound } from 'next/navigation';
import { tours } from '@/lib/data/tours';

export default async function TourDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const tour = tours.find(t => t.slug === slug);

	if (!tour) return notFound();

	return (
		<section className='mx-auto max-w-4xl px-6 py-20'>
			<h1 className='text-4xl font-bold mb-6'>{tour.title}</h1>
			<p className='text-gray-500 mb-4'>{tour.location}</p>
			<p className='mb-6'>{tour.description}</p>
			<p className='text-xl font-semibold'>${tour.price}</p>
		</section>
	);
}

