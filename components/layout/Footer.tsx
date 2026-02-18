import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-black text-gray-300 mt-24'>
			<div className='mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4'>
				{/* Brand */}
				<div>
					<h3 className='text-white text-lg font-semibold mb-4'>SilkRoad</h3>
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

				{/* Contact */}
				<div>
					<h4 className='text-white font-medium mb-4'>Contact</h4>
					<ul className='space-y-2 text-sm'>
						<li>Email: info@silkroad.uz</li>
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
				© {new Date().getFullYear()} SilkRoad. All rights reserved.
			</div>
		</footer>
	);
}
