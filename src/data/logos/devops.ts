import { TechLogo } from "../../types";

import docker from "../../assets/images/icons/devops/Docker.svg";
import dockerCompose from "../../assets/images/icons/devops/DockerCompose.svg";
import linux from "../../assets/images/icons/devops/Linux.svg";
import virtualMachine from "../../assets/images/icons/devops/VirtualMachine.svg";

export const devopsLogos: TechLogo[] = [
	{ src: docker, alt: "Docker" },
	{
		src: dockerCompose,
		alt: "Docker Compose",
	},
	{ src: linux, alt: "Linux" },
	{
		src: virtualMachine,
		alt: "Virtual Machine",
	},
];
