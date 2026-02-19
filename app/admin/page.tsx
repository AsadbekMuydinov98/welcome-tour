export default function AdminDashboard() {
	return (
		<div className='p-8 space-y-8'>
			{/* Page Title */}
			<div>
				<h1 className='text-3xl font-semibold tracking-tight'>Admin Dashboard</h1>
				<p className='text-muted-foreground mt-1'>Overview of your platform activity</p>
			</div>

			{/* Stats */}
			<div className='grid gap-6 md:grid-cols-3'>
				<div className='bg-card border border-border rounded-xl p-6 space-y-2'>
					<p className='text-sm text-muted-foreground'>Total Tours</p>
					<p className='text-2xl font-semibold'>12</p>
				</div>

				<div className='bg-card border border-border rounded-xl p-6 space-y-2'>
					<p className='text-sm text-muted-foreground'>Total Guides</p>
					<p className='text-2xl font-semibold'>5</p>
				</div>

				<div className='bg-card border border-border rounded-xl p-6 space-y-2'>
					<p className='text-sm text-muted-foreground'>Active Tours</p>
					<p className='text-2xl font-semibold'>9</p>
				</div>
			</div>

			{/* Recent Activity */}
			<div className='bg-card border border-border rounded-xl p-6'>
				<h2 className='text-lg font-medium mb-4'>Recent Activity</h2>
				<ul className='space-y-3 text-sm text-muted-foreground'>
					<li>• New tour “Samarkand Heritage” created</li>
					<li>• Guide “Aziz Karimov” added</li>
					<li>• Tour “Desert Safari” updated</li>
				</ul>
			</div>
		</div>
	);
}
