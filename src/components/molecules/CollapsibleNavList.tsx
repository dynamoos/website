import { FC, useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import AppLink from "../atoms/AppLink";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../organisms/Accordion";

interface NavLinkItem {
	name: string;
	href: string;
}

interface CollapsibleNavListProps {
	title: string;
	items: NavLinkItem[];
	className?: string;
}

const CollapsibleNavList: FC<CollapsibleNavListProps> = ({
	title,
	items,
	className,
}) => {
	const isSmUp = useMediaQuery("(min-width: 640px)");
	const [openValue, setOpenValue] = useState<string>("item-1");

	useEffect(() => {
		if (!isSmUp) {
			setOpenValue("");
		} else {
			setOpenValue("item-1");
		}
	}, [isSmUp]);

	if (isSmUp) {
		const containerClassName = `md:mt-12 ${className || ""}`.trim();
		return (
			<div className={containerClassName}>
				<h3 className="font-graphik-400 text-sm text-gray-900 select-none mb-4">
					{title}
				</h3>
				<ul role="list" className="space-y-2">
					{items.map((item) => (
						<li key={item.name}>
							<AppLink href={item.href} variant="footer">
								{item.name}
							</AppLink>
						</li>
					))}
				</ul>
			</div>
		);
	}

	const mainDivClassName = `${className || ""}`.trim();
	return (
		<div className={mainDivClassName}>
			<Accordion
				type="single"
				collapsible
				value={openValue}
				onValueChange={setOpenValue}
			>
				<AccordionItem value="item-1" className="border-b-0">
					<AccordionTrigger className="hover:no-underline py-2">
						<span className="font-graphik-400 text-sm text-gray-900 select-none">
							{title}
						</span>
					</AccordionTrigger>
					{items.map((item) => (
						<AccordionContent key={item.name} className="pb-2 pt-1">
							<AppLink href={item.href} variant="footer">
								{item.name}
							</AppLink>
						</AccordionContent>
					))}
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default CollapsibleNavList;
