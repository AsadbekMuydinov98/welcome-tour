type Props = {
	title: string;
	links: { name: string; href: string }[];
};

export default function FooterSocial({ title, links }: Props) {
	return (
		<div>
			<h4 className='font-medium mb-4'>{title}</h4>
			<div className='flex gap-4 text-sm'>
				{links.map(link => (
					<a key={link.name} href={link.href} className='hover:text-primary transition'>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
}
