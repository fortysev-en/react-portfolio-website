/** @format */

import React from "react";
import Draggable from "react-draggable";
import { Maximize2 } from "react-feather";

const TerminalBlock = (props) => {
	return (
		<h1 className="text-[#f1faee] text-6xl font-bold">
			<Draggable defaultPosition={{ x: props.x, y: props.y }}>
				<div
					className="bg-[#282828] rounded-xl select-none shadow-[-25px_25px_0px_#00000030]"
					style={{ width: props.width, height: props.height }}
				>
					<div className="flex justify-between items-center px-2 bg-[#444444] h-5 rounded-t-xl	">
						<div className="flex gap-1">
							<div className="h-2 w-2 rounded-full bg-[#DA1B1B]"></div>
							<div className="h-2 w-2 rounded-full bg-[#FFC700]"></div>
							<div className="h-2 w-2 rounded-full bg-[#00DFAA]"></div>
						</div>
						<div>
							<Maximize2 size={10} color="#FFF" />
						</div>
					</div>
					<h6 className="w-80 ml-3 font-normal text-sm mt-5">{props.data}</h6>
				</div>
			</Draggable>
		</h1>
	);
};

export default TerminalBlock;
