import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	const dict = await getDictionary(locale);

	return (
		<section className='mx-auto max-w-4xl px-6 py-20'>
			<h1 className='text-3xl font-bold mb-8'>{dict.contact.title}</h1>

			<div className='grid gap-10 md:grid-cols-2'>
				{/* Contact Info */}
				<div className='space-y-4 text-gray-600'>
					<p>
						<strong>{dict.contact.email}:</strong> info@yourcompany.com
					</p>
					<p>
						<strong>{dict.contact.phone}:</strong> +998 90 123 45 67
					</p>
					<p>
						<strong>{dict.contact.address}:</strong> Tashkent, Uzbekistan
					</p>
				</div>

				{/* Form */}
				<form className='space-y-4'>
					<input type='text' placeholder={dict.contact.namePlaceholder} className='w-full border rounded-xl px-4 py-2' />

					<input type='email' placeholder={dict.contact.emailPlaceholder} className='w-full border rounded-xl px-4 py-2' />

					<textarea placeholder={dict.contact.messagePlaceholder} rows={4} className='w-full border rounded-xl px-4 py-2' />

					<button type='submit' className='bg-black text-white px-6 py-2 rounded-xl'>
						{dict.contact.button}
					</button>
				</form>
			</div>
		</section>
	);
}
