import Link from 'next/link';
import { tours } from '@/lib/data/tours';
import TourCard from '@/components/tour/TourCard';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

type FeaturedToursProps = {
	dict: any;
	locale: string;
};

export default function FeaturedTours({ dict, locale }: FeaturedToursProps) {
	return (
		<Section>
			<Container>
				<div className='flex justify-between items-center mb-12'>
					<h2 className='text-3xl font-bold'>{dict.home.featuredTours.title}</h2>

					<Link href={`/${locale}/tours`} className='text-sm font-medium hover:underline'>
						{dict.home.featuredTours.viewAll} →
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
