/** @format */

import React from "react";
import Draggable from "react-draggable";
import { Maximize2 } from "react-feather";

const TerminalBlock = (props) => {
	return (
		<h1 className="hidden md:block md:absolute">
			<Draggable defaultPosition={{ x: props.x, y: props.y }}>
				<div className="top-10 right-20 w-[350px] h-[130px] bg-secondaryBg rounded-2xl">
					<div className="absolute bg-[#343a40] h-6 w-full rounded-t-2xl flex justify-between items-center px-4">
						<div className="flex gap-1 items-center h-full">
							<div className="h-2 w-2 rounded-full bg-[#DA1B1B]"></div>
							<div className="h-2 w-2 rounded-full bg-[#FFC700]"></div>
							<div className="h-2 w-2 rounded-full bg-[#00DFAA]"></div>
						</div>
						<div>
							<Maximize2 size={10} color="#FFF" />
						</div>
					</div>
					<div className="absolute top-8 h-full w-full p-2">
						<div className="text-[#fff] px-2 opacity-70 font-['Share_Tech_Mono'] text-[14px] leading-6">
							{props.data}
						</div>
					</div>
				</div>
			</Draggable>
		</h1>
	);
};

export default TerminalBlock;
