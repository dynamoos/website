import { FC, useEffect } from "react";
import Container from "../../components/atoms/Container.tsx";
import LegalParagraph from "../../components/atoms/LegalParagraph.tsx";
import SEOHead from "../../components/atoms/SEOHead.tsx";
import SectionTitle from "../../components/atoms/SectionTitle.tsx";
import { SEOData } from "../../data";
import MainLayout from "../../layouts/MainLayout.tsx";
import { termsContent } from "./components/termsContent.tsx";

const Legal: FC = () => {
	const { default: defaultSEO, pages } = SEOData;
	const pageSEO = pages.termsAndConditions;
	useEffect((): void => {
		window.scroll(0, 0);
	}, []);

	return (
		<>
			<SEOHead
				title={pageSEO.title}
				description={pageSEO.description}
				keywords={pageSEO.keywords}
				ogImage={pageSEO.ogImage || defaultSEO.defaultImage}
				ogUrl={`${defaultSEO.domain}/terms-and-privacy`}
				canonicalUrl={`${defaultSEO.domain}/terms-and-privacy`}
				lang={defaultSEO.lang}
				author={pageSEO.author || defaultSEO.author}
				favicon={defaultSEO.favicon}
			/>
			<MainLayout>
				<Container className={"my-20 "}>
					<div className={"md:p-14 lg:p-20"}>
						<SectionTitle
							level={1}
							className="text-3xl font-bold mb-8 font-euclidcircularb-500"
						>
							Términos y condiciones
						</SectionTitle>
						<LegalParagraph>{termsContent.introduction}</LegalParagraph>
						{termsContent.sections.map((section, index) => (
							<div key={index} className="mt-12 mb-8">
								<SectionTitle level={3} className="text-3xl font-semibold mb-4">
									{section.title}
								</SectionTitle>

								{section.content && (
									<LegalParagraph>{section.content}</LegalParagraph>
								)}

								{section.subsections.map((subsection, subIndex) => (
									<div key={subIndex} className="mt-6 mb-4">
										{subsection.title && (
											<SectionTitle
												level={4}
												className="text-xl font-medium mb-3"
											>
												{subsection.title}
											</SectionTitle>
										)}
										{subsection.content && (
											<LegalParagraph>{subsection.content}</LegalParagraph>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				</Container>
			</MainLayout>
		</>
	);
};

export default Legal;
