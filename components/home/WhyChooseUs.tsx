import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

type WhyChooseUsProps = {
	dict: any;
};

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
	const { title, items } = dict.home.whyChooseUs;

	return (
		<Section className='bg-gray-50'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
				</div>

				<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
					{items.map((item: any, index: number) => (
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
