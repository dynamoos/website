import { FC } from "react";
import { contactInfo, legalItems, navItems, socialLinks } from "../../data";
import { NavItem } from "../../types";
import Container from "../atoms/Container";
import CopyrightText from "../atoms/CopyrightText";
import Logo from "../atoms/Logo";
import CollapsibleNavList from "../molecules/CollapsibleNavList";
import FooterSupportSection from "../organisms/FooterSupportSection";

const mapNavItems = (items: NavItem[]): { name: string; href: string }[] => {
	return items.map((item) => ({ name: item.label, href: item.href }));
};

const companyNavigation = navItems ? mapNavItems(navItems) : [];
const socialNavigation = socialLinks;
const legalNavigation = legalItems ? mapNavItems(legalItems) : [];

const Footer: FC = () => {
	return (
		<footer className="bg-[#f3f3f3] text-sm bottom-0">
			<Container>
				<div className={"mt-10"}>
					<Logo height={40} />
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<FooterSupportSection
						title="Soporte"
						contact={contactInfo}
						className="sm:col-span-1 mt-8 md:mt-12"
					/>

					<CollapsibleNavList
						title="Empresa"
						items={companyNavigation}
						className="sm:col-span-1 md:mt-8"
					/>
					<CollapsibleNavList
						title="Síguenos"
						items={socialNavigation}
						className="sm:col-span-1 md:mt-8"
					/>
					<CollapsibleNavList
						title="Legalasdasd"
						items={legalNavigation}
						className="sm:col-span-1 md:mt-8"
					/>
				</div>

				<div className="mt-8 border-t border-gray-200 pt-6">
					<CopyrightText companyName="Dynamoos Lab, Inc." />
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
