import { whyChooseUsItems } from '@/lib/data/whyChooseUs';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function WhyChooseUs() {
	return (
		<Section className='bg-gray-50'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Travel With Us</h2>

					<p className='text-gray-600 max-w-2xl mx-auto'>
						We combine cultural authenticity with premium comfort to deliver unforgettable journeys.
					</p>
				</div>

				<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
					{whyChooseUsItems.map((item, index) => (
						<div key={index} className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition'>
							<h3 className='text-lg font-semibold mb-3'>{item.title}</h3>
							<p className='text-sm text-gray-600 leading-relaxed'>{item.description}</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
