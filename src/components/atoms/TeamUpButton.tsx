import { FC } from "react";

type TeamUpButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const TeamUpButton: FC<TeamUpButtonProps> = ({ className, ...props }) => {
	const baseClasses =
		"relative inline-flex items-center rounded-xs border border-transparent bg-primary px-4 py-2 text-md font-euclidcircularb-500 text-white shadow-sm hover:bg-black hover:transition hover:duration-300 hover:ease-in-out";

	const finalClassName = `${baseClasses} ${className || ""}`.trim();
	return (
		<button type="button" className={finalClassName} {...props}>
			Comencemos
			<span className="ml-3 flex space-x-1">
				<span
					className="h-1.5 w-1.5 rounded-full bg-white dot-bounce"
					style={{ animationDelay: "0s" }}
				></span>
				<span
					className="h-1.5 w-1.5 rounded-full bg-white dot-bounce"
					style={{ animationDelay: "0.2s" }}
				></span>
				<span
					className="h-1.5 w-1.5 rounded-full bg-white dot-bounce"
					style={{ animationDelay: "0.4s" }}
				></span>
			</span>
		</button>
	);
};

export default TeamUpButton;
