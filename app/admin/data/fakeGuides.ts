export type Guide = {
	id: string;
	name: string;
	experience: number; // years
	languages: string;
	status: 'active' | 'inactive';
};

export const fakeGuides: Guide[] = [
	{
		id: '1',
		name: 'Aziz Karimov',
		experience: 5,
		languages: 'English, Russian',
		status: 'active',
	},
	{
		id: '2',
		name: 'Malika Usmonova',
		experience: 8,
		languages: 'English, French',
		status: 'active',
	},
	{
		id: '3',
		name: 'Javlon Tursunov',
		experience: 3,
		languages: 'English',
		status: 'inactive',
	},
];
