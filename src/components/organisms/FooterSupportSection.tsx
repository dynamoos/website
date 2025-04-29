import { FC } from "react";
import { ContactInfo } from "../../types";
import AppLink from "../atoms/AppLink";
import SectionTitle from "../atoms/SectionTitle";

interface FooterSupportSectionProps {
	title: string;
	contact: ContactInfo;
	className?: string;
}

const FooterSupportSection: FC<FooterSupportSectionProps> = ({
	title,
	contact,
	className,
}) => {
	const containerClassName = `${className || ""}`.trim();

	return (
		<div className={containerClassName}>
			<SectionTitle>{title}</SectionTitle>
			<div className="mt-4 space-y-2">
				<span className="block font-graphik-200 text-gray-600 select-none">
					{contact.country}
				</span>
				{contact.email && (
					<AppLink
						href={`mailto:${contact.email}`}
						variant="footer-contact"
						className="block"
					>
						{contact.email}
					</AppLink>
				)}
				{contact.phone && (
					<AppLink
						href={`tel:${contact.phone}`}
						variant="footer-contact"
						className="block w-max underline-hover"
					>
						{contact.phone}
					</AppLink>
				)}
			</div>
		</div>
	);
};

export default FooterSupportSection;
