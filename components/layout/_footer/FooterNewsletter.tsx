type Props = {
	title: string;
	placeholder: string;
	button: string;
};

export default function FooterNewsletter({ title, placeholder, button }: Props) {
	return (
		<div className='md:col-span-2'>
			<h4 className='font-medium mb-4'>{title}</h4>
			<form className='flex gap-3'>
				<input type='email' placeholder={placeholder} className='px-4 py-2 rounded-xl border bg-muted text-foreground w-full' />
				<button className='bg-primary text-primary-foreground px-6 rounded-xl hover:opacity-90 transition'>{button}</button>
			</form>
		</div>
	);
}
