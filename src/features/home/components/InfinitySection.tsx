import { FC } from "react";
import { allTechLogos } from "../../../data";
import InfiniteScroller from "./InfiniteScroller";

const InfinitySection: FC = () => {
	return (
		<div className="py-8">
			<InfiniteScroller logos={allTechLogos} speed={60} />
		</div>
	);
};

export default InfinitySection;
