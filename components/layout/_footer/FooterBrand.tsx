type Props = {
	name: string;
	description: string;
};

export default function FooterBrand({ name, description }: Props) {
	return (
		<div>
			<h3 className='text-lg font-semibold mb-4'>{name}</h3>
			<p className='text-sm text-muted-foreground leading-relaxed'>{description}</p>
		</div>
	);
}
