import React from "react";
import { Link } from "react-router";

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: "default" | "footer" | "footer-contact";
}

const AppLink: React.FC<AppLinkProps> = ({
	href,
	children,
	className,
	target = "_blank",
	variant = "default",
	...props
}) => {
	const baseStyle = "transition-colors";
	const variantStyles = {
		default: "text-gray-700 hover:text-black",
		footer:
			"w-max font-graphik-200 text-gray-600 hover:text-black select-none underline-hover",
		"footer-contact": "font-graphik-200 text-gray-600 hover:text-black",
	};

	const finalClassName =
		`${baseStyle} ${variantStyles[variant]} ${className || ""}`.trim();

	if (!href) {
		return (
			<span className={finalClassName} {...props}>
				{children}
			</span>
		);
	}
	if (target) {
		return (
			<a href={href} className={finalClassName} {...props}>
				{children}
			</a>
		);
	}

	return (
		<Link to={href} className={finalClassName} {...props}>
			{children}
		</Link>
	);
};

export default AppLink;
