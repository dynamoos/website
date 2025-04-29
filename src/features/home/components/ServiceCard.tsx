import { motion } from "framer-motion";
import React from "react";
import { Service } from "../../../types";

const cardVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.8, 0.25, 1],
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		scale: 0.95,
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

interface ServiceCardProps {
	service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
	return (
		<motion.div
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
			layout
			className="bg-gray-100 p-6 rounded-xs shadow-md h-full hover:shadow-lg transition-shadow duration-200 ease-in-out"
		>
			<h3 className="text-xl font-graphik-400 mb-2">{service.title}</h3>
			<p className="text-gray-600 text-md font-graphik-200">
				{service.description}
			</p>
		</motion.div>
	);
};

export default ServiceCard;
