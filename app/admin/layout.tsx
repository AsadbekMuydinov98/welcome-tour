import { ReactNode } from 'react';
import { AdminSidebar } from './components/sidebar';
import { AdminHeader } from './components/header';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<div className='min-h-screen bg-background text-foreground'>
			<div className='flex'>
				<AdminSidebar />

				<div className='flex-1 flex flex-col'>
					<AdminHeader />
					<main className='flex-1 p-8'>{children}</main>
				</div>
			</div>
		</div>
	);
}
