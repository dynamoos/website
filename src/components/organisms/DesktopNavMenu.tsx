import { FC } from "react";
import { NavLink } from "react-router";
import { NavItem } from "../../types";
import TeamUpButton from "../atoms/TeamUpButton";

interface DesktopNavMenuProps {
	navigationItems: NavItem[];
}

const DesktopNavMenu: FC<DesktopNavMenuProps> = ({ navigationItems }) => {
	const whatsAppLink =
		"https://wa.me/51954629739?text=Hola%2C%20quiero%20hablar%20sobre%20un%20nuevo%20proyecto.%20%C2%BFPodemos%20conversar%3F";

	return (
		<div className="ml-4 mt-2 hidden flex-shrink-0 items-center md:flex">
			{navigationItems.map((item) =>
				item.label === "Explora nuestra IA" ? (
					<a
						key={item.label}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-euclidcircularb-500 leading-6 text-black mx-4 underline-hover transition-colors hover:text-gray-600"
					>
						{item.label}
					</a>
				) : (
					<NavLink
						key={item.label}
						to={item.href}
						className={({ isActive }) =>
							`text-sm font-euclidcircularb-500 leading-6 text-black mx-4 underline-hover transition-colors ${
								isActive ? "text-primary" : "hover:text-gray-600"
							}`
						}
					>
						{item.label}
					</NavLink>
				),
			)}

			<a
				href={whatsAppLink}
				target="_blank"
				rel="noopener noreferrer"
				className="ml-8"
			>
				<TeamUpButton />
			</a>
		</div>
	);
};

export default DesktopNavMenu;
