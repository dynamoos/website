import { AnimatePresence, motion, useInView } from "framer-motion";
import { FC, useMemo, useRef, useState } from "react";
import { servicesData } from "../../../data";
import { Category, Service } from "../../../types";

import Container from "../../../components/atoms/Container";
import CategoryButton from "./CategoryButton";
import ServiceCard from "./ServiceCard";

const ServicesSection: FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		() => servicesData?.categories?.[0]?.id ?? "",
	);

	const sectionRef = useRef<HTMLDivElement>(null);

	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const filteredServices = useMemo(() => {
		return (
			servicesData?.services?.filter(
				(service: Service) => service.categoryId === selectedCategory,
			) ?? []
		);
	}, [selectedCategory]);

	const sectionContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	if (!servicesData?.categories?.length) {
		return null;
	}

	return (
		<motion.div
			ref={sectionRef}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={sectionContainerVariants}
		>
			<Container className={"py-12"}>
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
					<div className="lg:w-1/3 flex-shrink-0">
						<motion.h2
							className="text-3xl sm:text-4xl font-bold mb-8 lg:mb-10"
							variants={itemVariants}
						>
							Nuestros servicios
						</motion.h2>

						<div className="lg:hidden space-y-3">
							{servicesData.categories.map((category: Category) => (
								<div key={category.id}>
									<CategoryButton
										category={category}
										isActive={selectedCategory === category.id}
										onClick={() => setSelectedCategory(category.id)}
									/>
									<AnimatePresence initial={false}>
										{selectedCategory === category.id && (
											<motion.div
												key={`content-${category.id}`}
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3, ease: "easeInOut" }}
												className="overflow-hidden mt-2"
											>
												<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4">
													{" "}
													{/* Grid para tarjetas */}
													{filteredServices.length > 0 ? (
														filteredServices.map((service: Service) => (
															<ServiceCard key={service.id} service={service} />
														))
													) : (
														<p className="text-gray-500 col-span-full">
															No services in this category.
														</p>
													)}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>

						<motion.div className="hidden lg:block space-y-1">
							{servicesData.categories.map((category: Category) => (
								<motion.div key={category.id} variants={itemVariants}>
									<CategoryButton
										category={category}
										isActive={selectedCategory === category.id}
										onClick={() => setSelectedCategory(category.id)}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>

					<motion.div
						className={"hidden lg:grid lg:grid-cols-2 gap-6 flex-1 items-start"}
						variants={{
							visible: {
								transition: { staggerChildren: 0.1, delayChildren: 0.2 },
							},
						}}
					>
						<AnimatePresence>
							{filteredServices.map((service: Service) => (
								<motion.div
									key={service.id}
									className="w-full h-full"
									variants={itemVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
								>
									<ServiceCard service={service} />
								</motion.div>
							))}
						</AnimatePresence>
						{filteredServices.length === 0 && selectedCategory !== "" && (
							<p className="text-gray-500 lg:col-span-2">
								No services in this category.
							</p>
						)}
					</motion.div>
				</div>
			</Container>
		</motion.div>
	);
};

export default ServicesSection;
