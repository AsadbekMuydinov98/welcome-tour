import Link from 'next/link';
import { tours } from '@/lib/data/tours';
import TourCard from '@/components/tour/TourCard';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function FeaturedTours() {
	return (
		<Section>
			<Container>
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
			</Container>
		</Section>
	);
}
