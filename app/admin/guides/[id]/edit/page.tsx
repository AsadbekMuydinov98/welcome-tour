type Props = {
	params: { id: string };
};

export default function EditGuidePage({ params }: Props) {
	return (
		<div className='space-y-6 max-w-2xl'>
			<div>
				<h1 className='text-2xl font-semibold tracking-tight'>Edit Guide</h1>
				<p className='text-sm text-muted-foreground'>Editing guide ID: {params.id}</p>
			</div>

			<form className='space-y-6 bg-card border border-border rounded-xl p-6'>
				{/* Name */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Full Name</label>
					<input
						type='text'
						defaultValue='Aziz Karimov'
						className='w-full border border-border rounded-lg px-3 py-2 bg-background'
					/>
				</div>

				{/* Experience */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Experience (years)</label>
					<input type='number' defaultValue='5' className='w-full border border-border rounded-lg px-3 py-2 bg-background' />
				</div>

				{/* Languages */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Languages</label>
					<input
						type='text'
						defaultValue='English, Russian'
						className='w-full border border-border rounded-lg px-3 py-2 bg-background'
					/>
				</div>

				{/* Status */}
				<div className='space-y-2'>
					<label className='text-sm font-medium'>Status</label>
					<select defaultValue='active' className='w-full border border-border rounded-lg px-3 py-2 bg-background'>
						<option value='active'>Active</option>
						<option value='inactive'>Inactive</option>
					</select>
				</div>

				{/* Actions */}
				<div className='flex justify-end gap-3'>
					<button type='button' className='px-4 py-2 rounded-lg border border-border text-sm'>
						Cancel
					</button>

					<button type='submit' className='px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm'>
						Update Guide
					</button>
				</div>
			</form>
		</div>
	);
}
