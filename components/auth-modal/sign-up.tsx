'use client';

export default function SignUpForm() {
	return (
		<form className='flex flex-col gap-4'>
			<input
				type='text'
				placeholder='Name'
				className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='email'
				placeholder='Email'
				className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<input
				type='password'
				placeholder='Password'
				className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<button type='submit' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
				Sign Up
			</button>
		</form>
	);
}
