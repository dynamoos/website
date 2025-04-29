import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface HeroHeadlineProps {
	staticText: string;
	typewriterWords: string[];
}

const HeroHeadline: React.FC<HeroHeadlineProps> = ({
	staticText,
	typewriterWords,
}) => {
	return (
		<h1 className="text-3xl font-bold font-euclidcircularb-500 sm:font-euclidcircularb-300 tracking-tight sm:text-5xl leading-10 md:leading-20 leading-10">
			{staticText && <p>{staticText}</p>}
			<div className="h-24 sm:h-32 flex items-start justify-start md:items-center md:justify-center">
				<Typewriter
					words={typewriterWords}
					loop={true}
					cursor
					cursorStyle="_"
					typeSpeed={40}
					deleteSpeed={30}
					delaySpeed={800}
				/>
			</div>
		</h1>
	);
};

export default HeroHeadline;
