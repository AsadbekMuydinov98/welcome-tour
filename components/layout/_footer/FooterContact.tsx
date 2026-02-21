type Props = {
	title: string;
	items: string[];
};

export default function FooterContact({ title, items }: Props) {
	return (
		<div>
			<h4 className='font-medium mb-4'>{title}</h4>
			<ul className='space-y-2 text-sm text-muted-foreground'>
				{items.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</div>
	);
}
