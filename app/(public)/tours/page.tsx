import { tours } from '@/lib/data/tours';
import TourCard from '@/components/tour/TourCard';

export default function ToursPage() {
	return (
		<section className='mx-auto max-w-7xl px-6 py-20'>
			<h1 className='text-3xl font-bold mb-10'>Our Tours</h1>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{tours.map(tour => (
					<TourCard key={tour.id} tour={tour} />
				))}
			</div>
		</section>
	);
}
