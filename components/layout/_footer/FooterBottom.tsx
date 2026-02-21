type Props = {
	rights: string;
	brandName: string;
};

export default function FooterBottom({ rights, brandName }: Props) {
	return (
		<div className='border-t mt-16 py-6 text-center text-xs text-muted-foreground'>
			© {new Date().getFullYear()} {brandName}. {rights}
		</div>
	);
}
