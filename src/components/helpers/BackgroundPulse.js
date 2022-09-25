/** @format */

import React from "react";

const BackgroundPulse = () => {
	return (
		<div className="relative flex justify-center items-center -z-10">
			<div className="absolute border-2 border-[#333] h-[200px] w-[200px] lg:h-[500px] lg:w-[500px] rounded-full animate-ping overflow-hidden" />
			{/* <div className="absolute border-2 border-[#fff] h-[300px] w-[300px] rounded-full animate-ping" />
			<div className="absolute border-2 border-[#fff] h-[100px] w-[100px] rounded-full animate-ping" /> */}
		</div>
	);
};

export default BackgroundPulse;
