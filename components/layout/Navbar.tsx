'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const linkStyle = (path: string) => `transition ${pathname === path ? 'border-b-2 border-current pb-1' : 'hover:opacity-70'}`;

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-white'
			}`}
		>
			<div className='mx-auto max-w-7xl px-6 h-20 flex items-center justify-between'>
				<Link href='/' className='text-xl tracking-widest font-semibold'>
					Welcome Tour
				</Link>

				<nav className='hidden md:flex items-center gap-10 text-sm font-medium'>
					<Link href='/tours' className={linkStyle('/tours')}>
						Tours
					</Link>
					<Link href='/about' className={linkStyle('/about')}>
						About
					</Link>
					<Link href='/contact' className={linkStyle('/contact')}>
						Contact
					</Link>
				</nav>

				{/* Mobile Button */}
				<button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className='md:hidden bg-white text-black px-6 py-6 space-y-4 shadow-lg'>
					<Link href='/tours' className='block'>
						Tours
					</Link>
					<Link href='/about' className='block'>
						About
					</Link>
					<Link href='/contact' className='block'>
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}
