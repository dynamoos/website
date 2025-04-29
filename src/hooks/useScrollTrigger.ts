import { useEffect, useState } from "react";

interface UseScrollTriggerOptions {
	threshold?: number;
	target?: Window | Node | null;
}

export function useScrollTrigger(
	options: UseScrollTriggerOptions = {},
): boolean {
	const { threshold = 50, target = window } = options;
	const [isTriggered, setIsTriggered] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY =
				target === window
					? window.scrollY
					: ((target as Element)?.scrollTop ?? 0);

			setIsTriggered(scrollY > threshold);
		};

		const currentTarget = target || window;

		handleScroll();

		currentTarget.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			currentTarget.removeEventListener("scroll", handleScroll);
		};
	}, [threshold, target]);

	return isTriggered;
}

export default useScrollTrigger;
