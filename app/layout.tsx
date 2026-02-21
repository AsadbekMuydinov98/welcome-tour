import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Welcome Tour',
	description: 'You can plan your next trip with this app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className={`${roboto.variable} antialiased`}>
				<ThemeProvider>
					<main className='min-h-screen'>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
