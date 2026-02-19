'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import {ThemeToggle} from '@/components/ui/theme-toggle';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
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
				<Link href='/' className='text-xl tracking-widest font-semibold'>
					Welcome Tour
				</Link>

				<nav className='hidden md:flex items-center gap-10 text-sm font-medium'>
					<NavLinks />
					<ThemeToggle />
				</nav>

				<button className='md:hidden' onClick={() => setMenuOpen(prev => !prev)}>
					☰
				</button>
			</div>

			<MobileMenu open={menuOpen} />
		</header>
	);
}
