// src/components/atoms/CopyrightText.tsx
import React from "react";
import { cn } from "../../lib/utils";

interface CopyrightTextProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	companyName: string;
	startYear?: number;
}

const CopyrightText: React.FC<CopyrightTextProps> = ({
	companyName,
	startYear,
	className,
	...props
}) => {
	const currentYear = new Date().getFullYear();
	const yearText =
		startYear && startYear !== currentYear
			? `${startYear} - ${currentYear}`
			: currentYear;

	const defaultStyle = "text-center font-graphik-200 text-gray-400 select-none";

	return (
		<p className={cn(defaultStyle, className)} {...props}>
			&copy; {yearText} {companyName} Todos los derechos reservados.
		</p>
	);
};

export default CopyrightText;
