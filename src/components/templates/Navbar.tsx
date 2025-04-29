import { FC } from "react";
import { NavLink } from "react-router";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { NavItem } from "../../types";
import Container from "../atoms/Container.tsx";
import Logo from "../atoms/Logo";
import DesktopNavMenu from "../organisms/DesktopNavMenu";
import MobileNavMenu from "../organisms/MobileNavMenu";

interface NavbarProps {
	navigationItems: NavItem[];
}

const Navbar: FC<NavbarProps> = ({ navigationItems }) => {
	const isScrolled = useScrollTrigger({ threshold: 50 });

	const baseNavbarClasses =
		"w-full top-0 fixed z-40 transition-all duration-300 ease-in-out";
	const scrolledClasses = isScrolled ? "shadow-navbar bg-white py-0" : "py-0";

	const finalNavbarClasses = `${baseNavbarClasses} ${scrolledClasses}`.trim();

	return (
		<div className={finalNavbarClasses}>
			<Container className="py-0">
				<div className="flex h-16 items-center justify-between">
					<div className="flex-shrink-0">
						<NavLink to={"/"} aria-label="Homepage">
							<Logo height={30} />
						</NavLink>
					</div>

					<div className="hidden md:block">
						<DesktopNavMenu navigationItems={navigationItems} />
					</div>

					<div className="flex items-center md:hidden">
						<MobileNavMenu navigationItems={navigationItems} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
