import Link from 'next/link';

export default function Navbar() {
	return (
		<header className='w-full border-b bg-white'>
			<div className='mx-auto max-w-7xl px-6 py-4 flex items-center justify-between'>
				<Link href='/' className='text-xl font-semibold'>
					WelcomeTour
				</Link>

				<nav className='hidden md:flex gap-8 text-sm font-medium'>
					<Link href='/tours' className='hover:text-blue-600'>
						Tours
					</Link>
					<Link href='/about' className='hover:text-blue-600'>
						About
					</Link>
					<Link href='/contact' className='hover:text-blue-600'>
						Contact
					</Link>
				</nav>

				<Link href='/admin/login' className='text-sm bg-black text-white px-4 py-2 rounded-xl'>
					Admin
				</Link>
			</div>
		</header>
	);
}
