import { FC, ReactNode } from "react";

interface LegalParagraphProps {
	children: ReactNode;
	className?: string;
}

const LegalParagraph: FC<LegalParagraphProps> = ({
	children,
	className = "",
}) => {
	return <p className={`font-graphik-200  mb-4 ${className}`}>{children}</p>;
};

export default LegalParagraph;
