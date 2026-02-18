import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-black text-gray-300 mt-24'>
			<div className='mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4'>
				{/* Brand */}
				<div>
					<h3 className='text-white text-lg font-semibold mb-4'>Welcome Tour</h3>
					<p className='text-sm leading-relaxed'>
						Discover the timeless beauty of Uzbekistan with authentic, luxury travel experiences crafted for unforgettable
						memories.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className='text-white font-medium mb-4'>Quick Links</h4>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link href='/tours' className='hover:text-white'>
								Tours
							</Link>
						</li>
						<li>
							<Link href='/about' className='hover:text-white'>
								About
							</Link>
						</li>
						<li>
							<Link href='/contact' className='hover:text-white'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				{/* newsletter */}
				<div className='md:col-span-2'>
					<h4 className='text-white font-medium mb-4'>Subscribe to our newsletter</h4>
					<form className='flex gap-3'>
						<input type='email' placeholder='Your email' className='px-4 py-2 rounded-xl bg-gray-800 text-white w-full' />
						<button className='bg-white text-black px-6 rounded-xl'>Subscribe</button>
					</form>
				</div>

				{/* Contact */}
				<div>
					<h4 className='text-white font-medium mb-4'>Contact</h4>
					<ul className='space-y-2 text-sm'>
						<li>Email: welcometour@google.com</li>
						<li>Phone: +998 90 123 45 67</li>
						<li>Tashkent, Uzbekistan</li>
					</ul>
				</div>

				{/* Social */}
				<div>
					<h4 className='text-white font-medium mb-4'>Follow Us</h4>
					<div className='flex gap-4 text-sm'>
						<a href='#' className='hover:text-white'>
							Instagram
						</a>
						<a href='#' className='hover:text-white'>
							Facebook
						</a>
						<a href='#' className='hover:text-white'>
							YouTube
						</a>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className='border-t border-gray-800 py-6 text-center text-xs text-gray-500'>
				© {new Date().getFullYear()} Welcome Tour. All rights reserved.
			</div>
		</footer>
	);
}
