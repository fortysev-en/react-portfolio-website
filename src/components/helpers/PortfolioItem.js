/** @format */

import React, { useState } from "react";
import Anime, { anime } from "react-anime";
import { BoxArrowInUpRight } from "react-bootstrap-icons";
import ApplicationDev from "../../assests/app.svg";
import WebDev from "../../assests/web.svg";
import RomDev from "../../assests/rom.svg";
import SoftDev from "../../assests/soft.svg";
import PortDev from "../../assests/port.svg";

const PortfolioItem = (props) => {
	const [hover, setHover] = useState(false);
	return (
		<div
			className="relative flex flex-col gap-5 w-[300px] h-[400px] items-center justify-around bg-secondaryBg rounded-3xl p-5 m-5"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="flex flex-col gap-1 items-center text-center">
				<h1 className="text-primaryTxt">{props.heading}</h1>
				<h3 className="text-primaryTxt text-sm opacity-60 font-extralight">
					{props.heading2}
				</h3>
			</div>
			<div className="flex flex-col items-center justify-center text-center h-1/3">
				{hover ? (
					<Anime translateY={[-80, 0]}>
						<h1 className="text-primaryTxt text-sm">{props.title}</h1>
						<p className="text-primaryTxt text-sm opacity-50 mt-2">
							{props.description}
						</p>
					</Anime>
				) : props.type === "software" ? (
					<img
						src={SoftDev}
						className="w-[180px] opacity-70"
						alt="Portfolio Icon"
					/>
				) : props.type === "port" ? (
					<img
						src={PortDev}
						className="w-[160px] opacity-70"
						alt="Portfolio Icon"
					/>
				) : props.type === "app" ? (
					<img
						src={ApplicationDev}
						className="w-[90px] opacity-70"
						alt="Portfolio Icon"
					/>
				) : props.type === "web" ? (
					<img
						src={WebDev}
						className="w-[160px] opacity-70"
						alt="Portfolio Icon"
					/>
				) : props.type === "rom" ? (
					<img
						src={RomDev}
						className="w-[90px] opacity-70"
						alt="Portfolio Icon"
					/>
				) : null}
			</div>
			<a
				href={props.link}
				target="_blank"
				className="opacity-50 flex items-center text-primaryTxt text-xs transition duration-300 ease-in-out hover:opacity-100"
			>
				SHOOT <BoxArrowInUpRight className="mx-1" color="#fff" size={12} />
			</a>
		</div>
	);
};

export default PortfolioItem;
