type Props = {
	params: { id: string };
};

export default function EditTourPage({ params }: Props) {
	return (
		<div className='space-y-6 max-w-2xl'>
			<div>
				<h1 className='text-2xl font-semibold tracking-tight'>Edit Tour</h1>
				<p className='text-sm text-muted-foreground'>Editing tour ID: {params.id}</p>
			</div>

			<form className='space-y-6 bg-card border border-border rounded-xl p-6'>
				{/* Title */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Title</label>
					<input
						type='text'
						defaultValue='Samarkand Heritage'
						className='w-full border border-border rounded-lg px-3 py-2 bg-background'
					/>
				</div>

				{/* Price */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Price ($)</label>
					<input type='number' defaultValue='120' className='w-full border border-border rounded-lg px-3 py-2 bg-background' />
				</div>

				{/* Duration */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Duration</label>
					<input type='text' defaultValue='3 days' className='w-full border border-border rounded-lg px-3 py-2 bg-background' />
				</div>

				{/* Status */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Status</label>
					<select defaultValue='active' className='w-full border border-border rounded-lg px-3 py-2 bg-background'>
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
						Update Tour
					</button>
				</div>
			</form>
		</div>
	);
}
