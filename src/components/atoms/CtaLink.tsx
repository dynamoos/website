import React from "react";
import { Link } from "react-router";

interface CtaLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to?: string;
	children: React.ReactNode;
	showArrow?: boolean;
}

const CtaLink: React.FC<CtaLinkProps> = ({
	to,
	href,
	children,
	className,
	showArrow = true,
	...props
}) => {
	const baseClasses =
		"inline-block items-center rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-primary hover:text-white hover:transition hover:duration-700 hover:ease-in-out";
	const normalStateClasses = "text-gray-900";

	const finalClassName =
		`${baseClasses} ${normalStateClasses} ${className || ""}`.trim();

	const content = (
		<>
			{children}
			{showArrow && (
				<span className="text-gray-400 ml-1" aria-hidden="true">
					&rarr;
				</span>
			)}
		</>
	);

	if (to) {
		return (
			<Link to={to} className={finalClassName} {...(props as any)}>
				{content}
			</Link>
		);
	}

	return (
		<a href={href} className={finalClassName} {...props}>
			{content}
		</a>
	);
};

export default CtaLink;
