import { FC } from "react";
import { Category } from "../../../types";

interface CategoryButtonProps {
	category: Category;
	isActive: boolean;
	onClick: () => void;
}

const CategoryButton: FC<CategoryButtonProps> = ({
	category,
	isActive,
	onClick,
}) => {
	const baseClasses =
		"block text-left text-xl py-2 font-euclidcircularb-500 transition-colors duration-150";
	const activeClasses = "font-bold text-primary";
	const inactiveClasses = "text-gray-500 hover:text-gray-800";

	const finalClassName =
		`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`.trim();

	return (
		<button className={finalClassName} onClick={onClick} type="button">
			{category.title}
		</button>
	);
};

export default CategoryButton;
