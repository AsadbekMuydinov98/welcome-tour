export type Tour = {
	id: string;
	title: string;
	price: number;
	duration: string;
	status: 'active' | 'draft';
};

export const fakeTours: Tour[] = [
	{
		id: '1',
		title: 'Samarkand Heritage',
		price: 120,
		duration: '3 days',
		status: 'active',
	},
	{
		id: '2',
		title: 'Desert Safari',
		price: 200,
		duration: '2 days',
		status: 'draft',
	},
	{
		id: '3',
		title: 'Tashkent City Tour',
		price: 80,
		duration: '1 day',
		status: 'active',
	},
];
