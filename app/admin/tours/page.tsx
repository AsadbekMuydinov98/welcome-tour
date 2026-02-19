import Link from 'next/link';
import { DataTable } from '../components/data-table';
import { fakeTours, Tour } from '../data/fakeTours';

export default function ToursPage() {
	const columns = [
		{ header: 'Title', accessor: 'title' },
		{ header: 'Price ($)', accessor: 'price' },
		{ header: 'Duration', accessor: 'duration' },
		{ header: 'Status', accessor: 'status' },
	] as const;

	return (
		<div className='space-y-6'>
			{/* Page header */}
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-2xl font-semibold tracking-tight'>Tours</h1>
					<p className='text-muted-foreground text-sm'>Manage your tour packages</p>
				</div>

				<Link href='/admin/tours/new' className='px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm'>
					+ New Tour
				</Link>
			</div>

			{/* Table */}
			<DataTable<Tour>
				data={fakeTours}
				columns={columns as any}
				actions={row => (
					<div className='flex gap-3 justify-end text-sm'>
						<Link href={`/admin/tours/${row.id}/edit`} className='text-primary hover:underline'>
							Edit
						</Link>
					</div>
				)}
			/>
		</div>
	);
}
