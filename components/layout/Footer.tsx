import FooterBottom from "./_footer/FooterBottom";
import FooterBrand from "./_footer/FooterBrand";
import FooterContact from "./_footer/FooterContact";
import FooterLinks from "./_footer/FooterLinks";
import FooterNewsletter from "./_footer/FooterNewsletter";
import FooterSocial from "./_footer/FooterSocial";


type Props = {
	dict: any;
	locale: string;
};

export default function Footer({ dict, locale }: Props) {
	const { brand, quickLinks, newsletter, contact, social, bottom } = dict.footer;

	return (
		<footer className='mt-24 border-t bg-background text-foreground'>
			<div className='mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4'>
				<FooterBrand name={brand.name} description={brand.description} />

				<FooterLinks title={quickLinks.title} links={quickLinks.links} locale={locale} navDict={dict.nav} />

				<FooterNewsletter title={newsletter.title} placeholder={newsletter.placeholder} button={newsletter.button} />

				<FooterContact title={contact.title} items={contact.items} />

				<FooterSocial title={social.title} links={social.links} />
			</div>

			<FooterBottom rights={bottom.rights} brandName={brand.name} />
		</footer>
	);
}
