import Link from 'next/link';

type Props = {
	title: string;
	links: { key: string; href: string }[];
	locale: string;
	navDict: any;
};

export default function FooterLinks({ title, links, locale, navDict }: Props) {
	return (
		<div>
			<h4 className='font-medium mb-4'>{title}</h4>
			<ul className='space-y-2 text-sm'>
				{links.map(link => (
					<li key={link.key}>
						<Link href={`/${locale}/${link.href}`} className='hover:text-primary transition'>
							{navDict[link.key]}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
