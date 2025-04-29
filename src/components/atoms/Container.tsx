import React, { FC, ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
	const baseClasses = "mx-auto max-w-full px-4 py-2 sm:px-12 lg:px-16 xl:px-44";

	const finalClassName = `${baseClasses} ${className || ""}`.trim();

	return (
		<div className={finalClassName} {...props}>
			{children}
		</div>
	);
};

export default Container;
