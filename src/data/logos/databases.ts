import { TechLogo } from "../../types";

import mySql from "../../assets/images/icons/databases/MySQL.svg";
import postgresql from "../../assets/images/icons/databases/Postgresql.svg";
import redis from "../../assets/images/icons/databases/Redis.svg";
import sqlServer from "../../assets/images/icons/databases/SqlServer.svg";

export const databaseLogos: TechLogo[] = [
	{ src: mySql, alt: "MySQL" },
	{ src: postgresql, alt: "PostgreSQL" },
	{ src: redis, alt: "Redis" },
	{ src: sqlServer, alt: "SQL Server" },
];
