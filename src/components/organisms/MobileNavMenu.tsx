import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import { FC, Fragment } from "react";
import { NavLink } from "react-router";
import { NavItem } from "../../types";

interface MobileNavMenuProps {
	navigationItems: NavItem[];
}

const MobileNavMenu: FC<MobileNavMenuProps> = ({ navigationItems }) => {
	return (
		<Popover className="block md:hidden">
			{({ open }) => (
				<>
					<PopoverButton className="relative z-10 flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
						<span className="sr-only">Open menu</span>
						{open ? (
							<XIcon className="h-6 w-6" aria-hidden="true" />
						) : (
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						)}
					</PopoverButton>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<PopoverPanel
							anchor="bottom end"
							className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20" // Clases estándar de panel flotante
						>
							<div className="py-1">
								{navigationItems.map((item) => (
									<NavLink
										key={item.label}
										to={item.href}
										className={({ isActive }) =>
											`block px-4 py-2 text-sm font-euclidcircularb-500 transition-colors ${
												isActive
													? "bg-primary-50 text-primary font-medium"
													: "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
											}`.trim()
										}
									>
										<span className="underline-hover">{item.label}</span>
									</NavLink>
								))}
							</div>
						</PopoverPanel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default MobileNavMenu;
