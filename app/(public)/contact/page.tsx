export default function ContactPage() {
	return (
		<section className='mx-auto max-w-4xl px-6 py-20'>
			<h1 className='text-3xl font-bold mb-8'>Contact Us</h1>

			<div className='grid gap-10 md:grid-cols-2'>
				{/* Contact Info */}
				<div className='space-y-4 text-gray-600'>
					<p>
						<strong>Email:</strong> info@yourcompany.com
					</p>
					<p>
						<strong>Phone:</strong> +998 90 123 45 67
					</p>
					<p>
						<strong>Address:</strong> Tashkent, Uzbekistan
					</p>
				</div>

				{/* Simple Form */}
				<form className='space-y-4'>
					<input type='text' placeholder='Your Name' className='w-full border rounded-xl px-4 py-2' />

					<input type='email' placeholder='Your Email' className='w-full border rounded-xl px-4 py-2' />

					<textarea placeholder='Your Message' rows={4} className='w-full border rounded-xl px-4 py-2' />

					<button type='submit' className='bg-black text-white px-6 py-2 rounded-xl'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
