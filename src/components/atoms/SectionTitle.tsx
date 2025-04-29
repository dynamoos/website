import React, { FC } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const SectionTitle: FC<SectionTitleProps> = ({
	children,
	className,
	level = 2,
	...props
}) => {
	const Tag = `h${level}` as React.ElementType;
	const defaultStyle = "text-black select-none";

	const finalClassName =
		`${defaultStyle} ${className || "text-sm font-graphik-400"}`.trim();

	return (
		<Tag
			className={finalClassName}
			{...(props as React.ComponentPropsWithoutRef<typeof Tag>)}
		>
			{children}
		</Tag>
	);
};

export default SectionTitle;
