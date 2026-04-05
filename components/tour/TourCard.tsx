import Link from 'next/link';
import { Tour } from '@/lib/data/tours';
import { Locale } from '@/lib/i18n';

type Props = {
	tour: Tour;
	locale: Locale;
	variant?: 'grid' | 'list';
};

export default function TourCard({ tour, locale, variant = 'grid' }: Props) {
	// GRID (HOME)
	if (variant === 'grid') {
		return (
			<div className='rounded-2xl overflow-hidden border bg-background shadow-sm hover:shadow-md transition'>
				<img src={tour.image} className='h-48 w-full object-cover' />

				<div className='p-5'>
					<h3 className='font-semibold text-lg mb-2'>{tour.title}</h3>

					<p className='text-sm text-muted-foreground mb-4'>{tour.duration}</p>

					<div className='flex justify-between items-center'>
						<span className='font-bold text-primary'>${tour.price}</span>

						<Link
							href={`/${locale}/tours/${tour.slug}`}
							className='text-sm px-4 py-2 rounded-xl bg-primary text-primary-foreground'
						>
							View
						</Link>
					</div>
				</div>
			</div>
		);
	}

	// LIST (TOURS PAGE)
	return (
		<div className='flex flex-col md:flex-row gap-6 border-b pb-6'>
			<img src={tour.image} className='w-full md:w-72 h-48 object-cover rounded-xl' />

			<div className='flex-1'>
				<h3 className='text-xl font-semibold mb-2'>{tour.title}</h3>

				<p className='text-muted-foreground mb-3'>{tour.description}</p>

				<p className='text-sm mb-2'>📍 {tour.locationPath.join(' → ')}</p>

				<p className='text-sm text-muted-foreground mb-4'>
					{tour.duration} • {tour.group} • {tour.season}
				</p>

				<div className='flex justify-between items-center'>
					<span className='text-lg font-bold text-primary'>${tour.price}</span>

					<Link href={`/${locale}/tours/${tour.slug}`} className='px-5 py-2 rounded-xl bg-primary text-primary-foreground'>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}
