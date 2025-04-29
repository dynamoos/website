import React from "react";
import AppLink from "../../../components/atoms/AppLink";

interface SolutionsDisplayProps {
	solutions: string[];
}

const SolutionsDisplay: React.FC<SolutionsDisplayProps> = ({ solutions }) => {
	return (
		<div className="flex flex-col md:flex-row flex-wrap md:justify-center text-start gap-6 mt-12 pb-4">
			{solutions.map((item: string, index: number) => (
				<AppLink
					key={index}
					className="text-md font-euclidcircularb-500 font-bold inline-block underline-hover w-max"
				>
					{item}
				</AppLink>
			))}
		</div>
	);
};

export default SolutionsDisplay;
