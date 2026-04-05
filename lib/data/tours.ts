export type Tour = {
	id: number;
	slug: string;
	title: string;
	description: string;
	image: string;
	locationPath: string[];
	duration: string;
	group: string;
	season: string;
	price: number;
};

export const tours: Tour[] = [
	{
		id: 1,
		slug: 'classic-uzbekistan-8-day',
		title: '8-day Classic Uzbekistan Tour 2026-2027',
		description: 'Explore Khiva, Bukhara and Samarkand with a small group and discover ancient Silk Road cities.',
		image: 'https://cdn.audleytravel.com/1050/748/79/1323355-registan-square-samarkand.webp',
		locationPath: ['Tashkent', 'Khiva', 'Bukhara', 'Samarkand'],
		duration: '8 Days',
		group: 'Group',
		season: 'All year round',
		price: 1240,
	},
	{
		id: 2,
		slug: 'extended-uzbekistan-12-day',
		title: '12-day Extended Uzbekistan Tour',
		description: 'Discover hidden gems including Nukus and Khorezm along with major historical cities.',
		image: 'https://www.tourstouzbekistan.com/uploads/2021%20photos/Samarkand/registan_samarkand_anurtour.jpeg',
		locationPath: ['Tashkent', 'Nukus', 'Khorezm', 'Khiva', 'Bukhara', 'Samarkand'],
		duration: '12 Days',
		group: 'Group',
		season: 'Spring, Summer, Autumn',
		price: 1890,
	},
	{
		id: 3,
		slug: 'silk-road-express',
		title: '10-day Silk Road Express',
		description: 'Fast-paced journey through Uzbekistan’s iconic Silk Road destinations.',
		image: 'https://images.unsplash.com/photo-1603898037225-1c6c6dfe3f2a',
		locationPath: ['Tashkent', 'Samarkand', 'Bukhara'],
		duration: '10 Days',
		group: 'Group',
		season: 'All year',
		price: 1500,
	},
	{
		id: 4,
		slug: 'luxury-uzbekistan',
		title: 'Luxury Uzbekistan Experience',
		description: 'Premium hotels, private transport, and curated cultural experiences.',
		image: 'https://images.unsplash.com/photo-1587135991058-8816b0286910',
		locationPath: ['Tashkent', 'Samarkand', 'Bukhara', 'Khiva'],
		duration: '7 Days',
		group: 'Private',
		season: 'All year',
		price: 2500,
	},
];
