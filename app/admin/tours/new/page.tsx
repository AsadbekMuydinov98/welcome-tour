export default function NewTourPage() {
	return (
		<div className='space-y-6 max-w-2xl'>
			<div>
				<h1 className='text-2xl font-semibold tracking-tight'>Create New Tour</h1>
				<p className='text-sm text-muted-foreground'>Add a new tour package to your platform</p>
			</div>

			<form className='space-y-6 bg-card border border-border rounded-xl p-6'>
				{/* Title */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Title</label>
					<input
						type='text'
						placeholder='Samarkand Heritage'
						className='w-full border border-border rounded-lg px-3 py-2 bg-background'
					/>
				</div>

				{/* Price */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Price ($)</label>
					<input type='number' placeholder='120' className='w-full border border-border rounded-lg px-3 py-2 bg-background' />
				</div>

				{/* Duration */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Duration</label>
					<input type='text' placeholder='3 days' className='w-full border border-border rounded-lg px-3 py-2 bg-background' />
				</div>

				{/* Status */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Status</label>
					<select className='w-full border border-border rounded-lg px-3 py-2 bg-background'>
						<option value='active'>Active</option>
						<option value='draft'>Draft</option>
					</select>
				</div>

				{/* Actions */}
				<div className='flex justify-end gap-3'>
					<button type='button' className='px-4 py-2 rounded-lg border border-border text-sm'>
						Cancel
					</button>

					<button type='submit' className='px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm'>
						Save Tour
					</button>
				</div>
			</form>
		</div>
	);
}
