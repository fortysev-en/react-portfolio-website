/** @format */

import React from "react";
import Anime, { anime } from "react-anime";

const SkillItem = (props) => {
	return (
		<div className="absolute bg-secondaryBg rounded-xl px-4 py-5 lg:w-[200px] m-2 h-fit transition duration-300 ease-in-out hover:bg-[#101011]">
			<div className="flex flex-col gap-2 items-center justify-center">
				<div className="w-5 lg:w-10 p-1" title={props.name + " " + props.value}>
					{props.icon}
				</div>
				<h3 className="hidden lg:block text-[#f1faee]">{props.name}</h3>
				<div className="hidden lg:block bg-[#555] w-full h-1 mb-1">
					<Anime
						keyframes={[{ width: "0%" }, { width: props.value }]}
						easing={"spring(1, 80, 10, 0)"}
						duration={2000}
						delay={1500}
						// endDelay={4000}
						// delay={props.delay}
						// endDelay={props.endDelay + 6000}
						// loop={true}
					>
						<div className="bg-[#06d6a0] h-1 rounded-full"></div>
					</Anime>
				</div>
			</div>
		</div>
	);
};

export default SkillItem;
