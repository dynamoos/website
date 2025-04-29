// src/features/home/components/Header.tsx
import React from "react";
import CtaLink from "../../../components/atoms/CtaLink";
import FullScreenHeaderLayout from "../../../components/templates/FullScreenHeaderLayout"; // Importa la plantilla
import { solutions, typewriterWords } from "../data"; // Ajusta importación
import HeroHeadline from "./HeroHeadline";
import SolutionsDisplay from "./SolutionsDisplay";

const Header: React.FC = () => {
	const staticHeadlineText = "Tu visión, nuestra tecnología:";
	const typewriterWordsList = typewriterWords || [];
	const solutionsList = solutions || [];
	const gradientId = "home-background-gradient";

	const svgBackgroundElement = (
		<div
			className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
			aria-hidden="true"
		>
			<svg
				className="relative left-1/2 h-full w-full -translate-x-1/2"
				viewBox="0 0 1155 678"
				preserveAspectRatio="xMidYMid slice"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill={`url(#${gradientId})`}
					fillOpacity=".3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
				<defs>
					<linearGradient
						id={gradientId}
						x1="1155.49"
						x2="-78.208"
						y1=".177"
						y2="474.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#9089FC" />
						<stop offset={1} stopColor="#FF80B5" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);

	return (
		<FullScreenHeaderLayout
			className="mt-12 md:mt-10"
			backgroundElement={svgBackgroundElement}
		>
			<div className="flex flex-col items-center text-center">
				<HeroHeadline
					staticText={staticHeadlineText}
					typewriterWords={typewriterWordsList}
				/>
				<SolutionsDisplay solutions={solutionsList} />
				<div className="mt-8 flex justify-center">
					<CtaLink href="https:/ai.dynamoos.pe">Explora nuestra IA</CtaLink>
				</div>
			</div>
		</FullScreenHeaderLayout>
	);
};

export default Header;
