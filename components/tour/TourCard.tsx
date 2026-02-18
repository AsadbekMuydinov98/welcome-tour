import Link from 'next/link';
import { Tour } from '@/lib/data/tours';

export default function TourCard({ tour }: { tour: Tour }) {
	return (
		<div className='bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition'>
			<div className='h-48 bg-gray-200'>{/* Later replace with next/image */}</div>

			<div className='p-5'>
				<h3 className='text-lg font-semibold mb-2'>{tour.title}</h3>
				<p className='text-sm text-gray-500 mb-2'>{tour.location}</p>
				<p className='text-sm text-gray-600 mb-4'>{tour.duration}</p>

				<div className='flex items-center justify-between'>
					<span className='font-bold text-lg'>${tour.price}</span>
					<Link href={`/tours/${tour.slug}`} className='text-sm bg-black text-white px-4 py-2 rounded-xl'>
						View
					</Link>
				</div>
			</div>
		</div>
	);
}
