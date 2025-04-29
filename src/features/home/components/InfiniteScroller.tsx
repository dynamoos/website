import { FC, useEffect, useRef } from "react";
import { TechLogo } from "../../../types";

type InfiniteScrollerProps = {
	logos: TechLogo[];
	speed?: number;
};

const LazyLoadedImage: FC<{ src: string; alt: string }> = ({ src, alt }) => {
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && imgRef.current) {
						imgRef.current.src = src;
						observer.unobserve(imgRef.current);
					}
				});
			},
			{ threshold: 0.1, rootMargin: "100px" },
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [src]);

	return (
		<img
			ref={imgRef}
			src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" // Placeholder ultra ligero
			data-src={src}
			alt={alt}
			className="w-12 lg:w-16 object-contain grayscale-100 hover:grayscale-0 transition-all duration-300"
			loading="lazy"
		/>
	);
};

const InfiniteScroller: FC<InfiniteScrollerProps> = ({
	logos,
	speed = 100,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		let frame: number;
		let start: number;
		const scroll = (timestamp: number) => {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;
			container.scrollLeft = (elapsed / 1000) * speed;
			if (container.scrollLeft >= container.scrollWidth / 2) {
				container.scrollLeft = 0;
				start = timestamp;
			}
			frame = requestAnimationFrame(scroll);
		};
		frame = requestAnimationFrame(scroll);
		return () => cancelAnimationFrame(frame);
	}, [speed]);

	const duplicated = [...logos, ...logos];

	return (
		<div
			ref={containerRef}
			className="w-full overflow-hidden whitespace-nowrap cursor-pointer"
			aria-label="Tecnologías con las que trabajamos"
		>
			<div className="flex gap-8 w-max">
				{duplicated.map((logo, index) => (
					<LazyLoadedImage key={index} src={logo.src} alt={logo.alt} />
				))}
			</div>
		</div>
	);
};

export default InfiniteScroller;
