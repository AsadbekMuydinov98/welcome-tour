import Hero from '@/components/home/Hero';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function HomePage() {
	return (
		<main className='overflow-hidden'>
			<Hero />
			<FeaturedTours />
			<WhyChooseUs />
		</main>
	);
}
