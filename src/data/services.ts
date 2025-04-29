import { ServicesData } from "../types/";

export const servicesData: ServicesData = {
	categories: [
		{
			id: "equipo-dedicado",
			title: "Equipo dedicado",
			description:
				"Proporcionamos equipos dedicados de desarrolladores, diseñadores y gestores de proyectos para trabajar en tus proyectos.",
		},
		{
			id: "software-personalizado",
			title: "Desarrollo de software a medida",
			description:
				"Creamos soluciones de software personalizadas para satisfacer las necesidades específicas de tu negocio.",
		},
		{
			id: "consultoria-ti",
			title: "Consultoría y soporte TI",
			description:
				"Nuestros servicios de consultoría TI te ayudan a optimizar tu estrategia tecnológica y dar soporte a tu infraestructura.",
		},
		{
			id: "transformacion-digital",
			title: "Transformación digital",
			description:
				"Ayudamos a empresas a aprovechar la tecnología para transformar sus operaciones y mejorar la experiencia del cliente.",
		},
		{
			id: "gestion-procesos-bpm",
			title: "Gestión de Procesos BPM",
			description:
				"Optimizamos y automatizamos los procesos de negocio para aumentar la eficiencia operativa y reducir costos.",
		},
		{
			id: "inteligencia-artificial",
			title: "Soluciones de IA",
			description:
				"Implementamos soluciones basadas en inteligencia artificial para optimizar procesos y crear nuevas oportunidades de negocio.",
		},
		{
			id: "data-analytics",
			title: "Ingeniería y Analítica de datos",
			description:
				"Convertimos datos en insights accionables para impulsar decisiones estratégicas y ventajas competitivas.",
		},
	],
	services: [
		// Servicios de BPM
		{
			id: "bpm-implementation",
			categoryId: "gestion-procesos-bpm",
			title: "Implementación de BPM",
			description:
				"Diseñamos e implementamos soluciones BPM personalizadas para optimizar y automatizar tus procesos de negocio clave.",
		},
		{
			id: "process-modeling",
			categoryId: "gestion-procesos-bpm",
			title: "Modelado y análisis de procesos",
			description:
				"Analizamos y modelamos tus procesos actuales para identificar ineficiencias y oportunidades de mejora.",
		},
		{
			id: "workflow-automation",
			categoryId: "gestion-procesos-bpm",
			title: "Automatización de flujos de trabajo",
			description:
				"Creamos flujos de trabajo digitales que eliminan tareas manuales y aceleran la ejecución de procesos empresariales.",
		},
		{
			id: "bpm-integration",
			categoryId: "gestion-procesos-bpm",
			title: "Integración BPM con sistemas existentes",
			description:
				"Conectamos tus soluciones BPM con el ecosistema tecnológico actual para garantizar un flujo de información óptimo.",
		},

		// Equipos dedicados
		{
			id: "staff-augmentation",
			categoryId: "equipo-dedicado",
			title: "Ampliación de personal",
			description:
				"Extiende tu equipo con nuestros desarrolladores, diseñadores y especialistas TI para cubrir las necesidades de tu proyecto.",
		},
		{
			id: "product-development",
			categoryId: "equipo-dedicado",
			title: "Desarrollo de productos",
			description:
				"Nuestro equipo dedicado puede llevar tu producto desde el concepto hasta el lanzamiento con metodologías ágiles.",
		},
		{
			id: "managed-teams",
			categoryId: "equipo-dedicado",
			title: "Equipos gestionados",
			description:
				"Equipos completos bajo nuestra gestión que se integran perfectamente con tus procesos y cultura empresarial.",
		},
		{
			id: "tech-specialists",
			categoryId: "equipo-dedicado",
			title: "Especialistas tecnológicos",
			description:
				"Acceso a desarrolladores especializados en tecnologías emergentes para proyectos específicos o complejos.",
		},

		// Software personalizado
		{
			id: "erp",
			categoryId: "software-personalizado",
			title: "Planificación de recursos empresariales",
			description:
				"Construimos sistemas ERP que simplifican operaciones complejas, integrando todos los procesos para facilitar la gestión de tu negocio.",
		},
		{
			id: "crm",
			categoryId: "software-personalizado",
			title: "Gestión de relaciones con clientes",
			description:
				"Nuestra plataforma CRM te ayuda a gestionar las relaciones con clientes de manera efectiva, impulsando la eficiencia en ventas y marketing.",
		},
		{
			id: "web-apps",
			categoryId: "software-personalizado",
			title: "Aplicaciones web empresariales",
			description:
				"Desarrollo de aplicaciones web escalables y robustas adaptadas a los flujos de trabajo específicos de tu organización.",
		},
		{
			id: "mobile-apps",
			categoryId: "software-personalizado",
			title: "Desarrollo de apps móviles",
			description:
				"Creamos aplicaciones móviles nativas e híbridas con experiencias de usuario excepcionales y alto rendimiento técnico.",
		},

		// Consultoría TI
		{
			id: "cloud",
			categoryId: "consultoria-ti",
			title: "Migración a la nube",
			description:
				"Ayudamos a empresas a trasladar su infraestructura y aplicaciones a la nube para mejorar la escalabilidad y reducir costos.",
		},
		{
			id: "security",
			categoryId: "consultoria-ti",
			title: "Soluciones de ciberseguridad",
			description:
				"Protege tu negocio con nuestros servicios integrales de seguridad que incluyen auditorías, implementación y monitoreo continuo.",
		},
		{
			id: "it-strategy",
			categoryId: "consultoria-ti",
			title: "Estrategia tecnológica",
			description:
				"Diseñamos hojas de ruta tecnológicas alineadas con tus objetivos de negocio para maximizar el retorno de inversión en TI.",
		},
		{
			id: "managed-services",
			categoryId: "consultoria-ti",
			title: "Servicios gestionados de TI",
			description:
				"Ofrecemos soporte técnico 24/7, mantenimiento preventivo y gestión de infraestructura para optimizar tus operaciones tecnológicas.",
		},

		// Transformación digital
		{
			id: "digital-strategy",
			categoryId: "transformacion-digital",
			title: "Estrategia digital",
			description:
				"Creamos estrategias integrales de transformación digital adaptadas a los objetivos específicos de tu negocio.",
		},
		{
			id: "process-automation",
			categoryId: "transformacion-digital",
			title: "Automatización de procesos",
			description:
				"Optimiza tus operaciones con nuestras soluciones de automatización que reducen el trabajo manual y aumentan la productividad.",
		},
		{
			id: "digital-experience",
			categoryId: "transformacion-digital",
			title: "Experiencia digital",
			description:
				"Diseñamos experiencias digitales omnicanal que conectan con tus clientes y fortalecen la fidelidad a tu marca.",
		},
		{
			id: "innovation-lab",
			categoryId: "transformacion-digital",
			title: "Laboratorio de innovación",
			description:
				"Identificamos oportunidades disruptivas y desarrollamos prototipos tecnológicos para mantener tu ventaja competitiva.",
		},

		// Inteligencia Artificial
		{
			id: "machine-learning",
			categoryId: "inteligencia-artificial",
			title: "Machine Learning",
			description:
				"Implementamos modelos predictivos y sistemas de aprendizaje automático que optimizan procesos y descubren patrones ocultos.",
		},
		{
			id: "chatbots",
			categoryId: "inteligencia-artificial",
			title: "Asistentes virtuales y chatbots",
			description:
				"Desarrollamos asistentes inteligentes que mejoran la atención al cliente y automatizan consultas frecuentes las 24 horas.",
		},
		{
			id: "ai-integration-advanced",
			categoryId: "inteligencia-artificial",
			title: "Integración avanzada de IA con LangChain y MCP",
			description:
				"Implementamos soluciones de IA generativa utilizando LangChain con sistemas RAG (Retrieval Augmented Generation) y el protocolo MCP (Model Completion Protocol) para crear aplicaciones inteligentes con acceso a datos empresariales.",
		},
		{
			id: "rpa-solutions",
			categoryId: "inteligencia-artificial",
			title: "Automatización Robótica de Procesos (RPA)",
			description:
				"Implementamos soluciones RPA con plataformas como Robocorp, Power Automate y UiPath para automatizar tareas repetitivas y flujos de trabajo empresariales.",
		},

		// Analítica de datos
		{
			id: "bi-dashboards",
			categoryId: "data-analytics",
			title: "Dashboards de Business Intelligence",
			description:
				"Diseñamos paneles interactivos que visualizan tus KPIs para facilitar el seguimiento y la toma de decisiones.",
		},
		{
			id: "etl-eda",
			categoryId: "data-analytics",
			title: "ETL y Análisis Exploratorio de Datos",
			description:
				"Desarrollamos procesos de Extracción, Transformación y Carga (ETL) eficientes y realizamos Análisis Exploratorio de Datos (EDA) para descubrir patrones y relaciones ocultas.",
		},
		{
			id: "data-integration",
			categoryId: "data-analytics",
			title: "Integración de datos",
			description:
				"Conectamos tus fuentes de datos dispersas para crear una visión unificada y coherente de tu información empresarial.",
		},
		{
			id: "data-pipelines",
			categoryId: "data-analytics",
			title: "Pipelines de datos y DataWarehouse",
			description:
				"Diseñamos e implementamos flujos de datos robustos y almacenes de datos centralizados para procesar y almacenar información de múltiples fuentes.",
		},
	],
};
