import { JSX } from "react";

export type SocialLink = {
	name: string;
	href: string;
	icon?: JSX.Element;
};

export type ContactInfo = {
	country: string;
	email: string;
	phone: string;
};

export type NavItem = {
	label: string;
	href: string;
	icon?: JSX.Element;
};

export interface TechLogo {
	src: string;
	alt: string;
}
