export default function Footer() {
	return (
		<footer className='border-t bg-gray-50'>
			<div className='mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex justify-between'>
				<p>© {new Date().getFullYear()} WelcomeTour</p>
				<p>All rights reserved</p>
			</div>
		</footer>
	);
}
