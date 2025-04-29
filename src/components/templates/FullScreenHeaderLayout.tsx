import { FC, HTMLAttributes, ReactNode } from "react";

interface FullScreenHeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	backgroundElement?: ReactNode;
}

const FullScreenHeaderLayout: FC<FullScreenHeaderLayoutProps> = ({
	children,
	className,
	backgroundElement,
	...props
}) => {
	const outerClasses = "relative isolate px-4 sm:px-12 lg:px-16 xl:px-44";
	const innerClasses =
		"mx-auto min-h-screen w-full flex flex-col items-center justify-center";

	return (
		<section className={`${outerClasses} ${className || ""}`.trim()} {...props}>
			{backgroundElement}

			<div className={innerClasses}>
				<div className="z-10 w-full">{children}</div>
			</div>
		</section>
	);
};

export default FullScreenHeaderLayout;
