import { aiLogos } from "./ai";
import { backendLogos } from "./backend";
import { businessAutomationLogos } from "./business-automation";
import { cloudLogos } from "./cloud";
import { dataVisualizationLogos } from "./data-visualization";
import { databaseLogos } from "./databases";
import { devopsLogos } from "./devops";
import { enterpriseAppLogos } from "./enterprise-applications";
import { frontendLogos } from "./frontend";

import { TechLogo } from "../../types";

export const allTechLogos: TechLogo[] = [
	...aiLogos,
	...backendLogos,
	...businessAutomationLogos,
	...cloudLogos,
	...dataVisualizationLogos,
	...databaseLogos,
	...devopsLogos,
	...enterpriseAppLogos,
	...frontendLogos,
];
