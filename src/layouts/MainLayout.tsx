import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import Footer from "../components/templates/Footer";
import Navbar from "../components/templates/Navbar";
import { navItems } from "../data";

interface LayoutProps {
	children: ReactNode;
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, transition: { duration: 0.8 } }}
			animate={{ opacity: 1, transition: { duration: 1.2 } }}
			exit={{ opacity: 0, transition: { duration: 1.2 } }}
			className="flex flex-col min-h-screen"
		>
			<Navbar navigationItems={navItems} />
			<main>{children}</main>
			<Footer />
		</motion.div>
	);
};

export default MainLayout;
