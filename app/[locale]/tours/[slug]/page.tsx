import { notFound } from 'next/navigation';
import { tours } from '@/lib/data/tours';
import { Locale } from '@/lib/i18n';

interface Props {
	params: Promise<{
		locale: Locale;
		slug: string;
	}>;
}

export default async function TourDetailsPage({ params }: Props) {
	// 🔥 ENG MUHIM TUZATISH
	const { slug, locale } = await params;

	const tour = tours.find(t => t.slug === slug);
	if (!tour) return notFound();

	return (
		<main className='pt-20'>
			{/* HERO */}
			<section className='relative h-[60vh]'>
				<img src={tour.image} className='absolute inset-0 w-full h-full object-cover' />

				<div className='absolute inset-0 bg-black/60' />

				<div className='relative z-10 h-full flex items-center justify-center text-center text-white px-6'>
					<div>
						<h1 className='text-4xl md:text-5xl font-bold mb-4'>{tour.title}</h1>

						<p className='text-lg opacity-90'>📍 {tour.locationPath.join(' → ')}</p>
					</div>
				</div>
			</section>

			{/* CONTENT */}
			<section className='mx-auto max-w-6xl px-6 py-20'>
				<div className='grid md:grid-cols-3 gap-12'>
					{/* LEFT */}
					<div className='md:col-span-2 space-y-8'>
						{/* Description */}
						<div>
							<h2 className='text-2xl font-semibold mb-4'>About This Tour</h2>
							<p className='text-muted-foreground leading-relaxed'>{tour.description}</p>
						</div>

						{/* Highlights */}
						<div>
							<h2 className='text-2xl font-semibold mb-4'>Tour Highlights</h2>

							<ul className='space-y-2 text-muted-foreground'>
								{tour.locationPath.map((loc, i) => (
									<li key={i}>• Visit {loc}</li>
								))}
							</ul>
						</div>
					</div>

					{/* RIGHT SIDEBAR */}
					<div className='border rounded-2xl p-6 shadow-sm h-fit bg-background'>
						<div className='space-y-4 mb-6'>
							<div>
								<p className='text-sm text-muted-foreground'>Duration</p>
								<p className='font-medium'>{tour.duration}</p>
							</div>

							<div>
								<p className='text-sm text-muted-foreground'>Group Type</p>
								<p className='font-medium'>{tour.group}</p>
							</div>

							<div>
								<p className='text-sm text-muted-foreground'>Season</p>
								<p className='font-medium'>{tour.season}</p>
							</div>
						</div>

						<div className='border-t pt-6'>
							<p className='text-sm text-muted-foreground mb-2'>Price</p>

							<p className='text-3xl font-bold text-primary mb-6'>${tour.price}</p>

							<button className='w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition'>
								Book Now
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
