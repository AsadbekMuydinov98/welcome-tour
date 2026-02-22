'use client';

import { useState } from 'react';
import SignInForm from './sign-in';
import SignUpForm from './sign-up';

export default function AuthModal() {
	const [open, setOpen] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);

	const toggleModal = () => setOpen(prev => !prev);
	const toggleForm = () => setIsSignUp(prev => !prev);

	return (
		<>
			<button onClick={toggleModal} className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
				{isSignUp ? 'Sign Up' : 'Sign In'}
			</button>

			{open && (
				<div className='fixed p-3 inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
					<div className='bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6 relative'>
						{/* Close Button */}
						<button
							onClick={toggleModal}
							className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-white'
						>
							✕
						</button>

						<h2 className='text-2xl font-bold mb-6 text-center'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

						{isSignUp ? <SignUpForm /> : <SignInForm />}

						<p className='text-sm text-center mt-4'>
							{isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
							<button onClick={toggleForm} className='text-blue-600 hover:underline'>
								{isSignUp ? 'Log In' : 'Sign Up'}
							</button>
						</p>

						<div className='flex items-center my-4'>
							<hr className='flex-1 border-gray-300' />
							<span className='mx-2 text-gray-400'>or</span>
							<hr className='flex-1 border-gray-300' />
						</div>

						<button className='flex w-80 items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition'>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png'
								alt='Google'
								className='w-5 h-5 mr-2'
							/>
							Sign {isSignUp ? 'up' : 'in'} with Google
						</button>
					</div>
				</div>
			)}
		</>
	);
}
