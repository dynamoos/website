export interface PageSEO {
	title: string;
	description: string;
	keywords: string;
	ogImage?: string;
	ogUrl?: string;
	author?: string;
}

export interface SEODataType {
	default: {
		siteName: string;
		domain: string;
		favicon: string;
		defaultImage: string;
		lang: string;
		author: string;
	};
	pages: {
		home: PageSEO;
		termsAndConditions: PageSEO;
	};
}

export const SEOData: SEODataType = {
	default: {
		siteName: "Dynamoos",
		domain: "https://dynamoos.pe",
		favicon: "/favicon.ico",
		defaultImage: "/assets/images/logos/dynamoos-og-default.jpg",
		lang: "es",
		author: "Dynamoos S.A.C.",
	},
	pages: {
		home: {
			title: "Dynamoos | Soluciones tecnológicas integrales para empresas",
			description:
				"Especialistas en desarrollo de software a medida, automatización de procesos, IA y soluciones digitales para aumentar la productividad de tu empresa.",
			keywords:
				"desarrollo software, inteligencia artificial, automatización, RPA, transformación digital, Perú, dynamoos, Tarma, Ciberseguridad, ERP, Odoo, SAP",
			ogImage: "/assets/images/logos/dynamoos-home-og.jpg",
		},
		termsAndConditions: {
			title: "Términos y Condiciones | Dynamoos",
			description:
				"Conoce nuestros términos y condiciones que rigen la relación contractual con nuestros clientes. Información sobre pagos, renovaciones y obligaciones.",
			keywords:
				"términos y condiciones, contratos, pagos, renovación automática, servicios tecnológicos, Perú",
		},
	},
};
