import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
	title: string;
	description: string;
	keywords?: string;
	ogImage?: string;
	ogUrl?: string;
	canonicalUrl?: string;
	lang?: string;
	author?: string;
	favicon?: string;
}

const SEOHead: FC<SEOHeadProps> = ({
	title,
	description,
	keywords,
	ogImage = "/assets/images/seo/dynamoos-og-default.png",
	ogUrl,
	canonicalUrl,
	lang = "es",
	author = "Dynamoos",
	favicon = "/favicon.ico",
}) => {
	return (
		<Helmet>
			{/* Etiquetas básicas */}
			<html lang={lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			{author && <meta name="author" content={author} />}
			<link rel="icon" href={favicon} />

			{/* Viewport para dispositivos móviles */}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>

			{/* Open Graph - usado por Facebook, LinkedIn, WhatsApp y otras redes */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			{ogUrl && <meta property="og:url" content={ogUrl} />}
			{ogImage && <meta property="og:image" content={ogImage} />}
			<meta property="og:site_name" content="Dynamoos" />
			<meta property="og:locale" content="es_PE" />

			{/* Twitter Card - es buena práctica mantenerlas aunque no uses Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{ogImage && <meta name="twitter:image" content={ogImage} />}

			{/* Canonical URL */}
			{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
		</Helmet>
	);
};

export default SEOHead;
