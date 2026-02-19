import Link from 'next/link';
import { DataTable } from '../components/data-table';
import { fakeGuides, Guide } from '../data/fakeGuides';

export default function GuidesPage() {
	const columns = [
		{ header: 'Name', accessor: 'name' },
		{ header: 'Experience (years)', accessor: 'experience' },
		{ header: 'Languages', accessor: 'languages' },
		{ header: 'Status', accessor: 'status' },
	] as const;

	return (
		<div className='space-y-6'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<div>
					<h1 className='text-2xl font-semibold tracking-tight'>Guides</h1>
					<p className='text-sm text-muted-foreground'>Manage your tour guides</p>
				</div>

				<Link href='/admin/guides/new' className='px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm'>
					+ New Guide
				</Link>
			</div>

			<DataTable<Guide>
				data={fakeGuides}
				columns={columns as any}
				actions={row => (
					<div className='flex gap-3 justify-end text-sm'>
						<Link href={`/admin/guides/${row.id}/edit`} className='text-primary hover:underline'>
							Edit
						</Link>
					</div>
				)}
			/>
		</div>
	);
}
