import { FC } from "react";
import SEOHead from "../../components/atoms/SEOHead.tsx";
import { SEOData } from "../../data";
import MainLayout from "../../layouts/MainLayout";
import Header from "./components/Header";
import InfinitySection from "./components/InfinitySection";
import ServicesSection from "./components/ServicesSection";

const Home: FC = () => {
	const { default: defaultSEO, pages } = SEOData;
	const pageSEO = pages.home;

	return (
		<>
			<SEOHead
				title={pageSEO.title}
				description={pageSEO.description}
				keywords={pageSEO.keywords}
				ogImage={pageSEO.ogImage || defaultSEO.defaultImage}
				ogUrl={`${defaultSEO.domain}`}
				canonicalUrl={`${defaultSEO.domain}`}
				lang={defaultSEO.lang}
				author={pageSEO.author || defaultSEO.author}
				favicon={defaultSEO.favicon}
			/>
			<MainLayout>
				<Header />
				<ServicesSection />
				<InfinitySection />
			</MainLayout>
		</>
	);
};

export default Home;
