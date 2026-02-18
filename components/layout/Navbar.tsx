'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-white'
			}`}
		>
			<div className='mx-auto max-w-7xl px-6 h-20 flex items-center justify-between'>
				{/* Logo */}
				<Link href='/' className='text-xl font-semibold tracking-widest'>
					Welcome Tour
				</Link>

				{/* Nav Links */}
				<nav className='hidden md:flex items-center gap-10 text-sm font-medium'>
					<Link href='/tours' className='hover:opacity-70 transition'>
						Tours
					</Link>
					<Link href='/about' className='hover:opacity-70 transition'>
						About
					</Link>
					<Link href='/contact' className='hover:opacity-70 transition'>
						Contact
					</Link>
				</nav>

				{/* CTA */}
				<Link
					href='/tours'
					className='hidden md:inline-block border px-5 py-2 rounded-xl text-sm hover:bg-black hover:text-white transition'
				>
					Explore
				</Link>
			</div>
		</header>
	);
}
