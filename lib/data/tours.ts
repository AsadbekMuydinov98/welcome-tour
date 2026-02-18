export interface Tour {
	id: string;
	title: string;
	slug: string;
	location: string;
	price: number;
	duration: string;
	image: string;
	description: string;
}

export const tours: Tour[] = [
	{
		id: '1',
		title: 'Samarkand Cultural Tour',
		slug: 'samarkand-cultural-tour',
		location: 'Samarkand, Uzbekistan',
		price: 250,
		duration: '3 Days',
		image: '/images/samarkand.jpg',
		description: 'Discover the historical beauty of Samarkand with guided city tours and cultural experiences.',
	},
	{
		id: '2',
		title: 'Bukhara Heritage Trip',
		slug: 'bukhara-heritage-trip',
		location: 'Bukhara, Uzbekistan',
		price: 200,
		duration: '2 Days',
		image: '/images/bukhara.jpg',
		description: 'Explore ancient architecture and vibrant bazaars in Bukhara.',
	},
];
