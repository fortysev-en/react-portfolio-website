/** @format */

import React from "react";
import {
	Facebook,
	Linkedin,
	Instagram,
	Discord,
	CaretDownFill,
} from "react-bootstrap-icons";
import TerminalBlock from "../components/helpers/TerminalBlock";
import Typewriter from "typewriter-effect";
import ProImg from "../assests/DSC_021.png";
import Anime from "react-anime";

const Home = () => {
	return (
		<div
			id="home"
			className="flex flex-col items-center h-screen relative w-full"
		>
			<TerminalBlock
				width="325px"
				height="110px"
				data={
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("> const newInstance = new Portfolio();<br>")
								.pauseFor(1500)
								.typeString("> console.log(newInstance.name);<br>")
								.pauseFor(1500)
								.pasteString("> Pushkar Jadhav")
								.start();
						}}
					/>
				}
				x={500}
				y={120}
			/>

			<div className="flex flex-col gap-3 items-center justify-center">
				<div className="w-[450px]">
					<img src={ProImg} className="w-full" />
				</div>
				<div className="text-center">
					<h3 className="text-primaryTxt">Hello, I'm</h3>
					<h1 className="text-primaryTxt text-5xl my-2">Pushkar Jadhav</h1>
					<h3 className="text-primaryTxt text-xl opacity-70">
						A Fullstack Developer
					</h3>
					<h3 className="text-primaryTxt text-sm mb-2">
						<div className="opacity-50 inline">Based in </div>
						<div className="opacity-100 inline">
							<span className="text-[#f77f00]">IN</span>
							<span className="text-primaryTxt">D</span>
							<span className="text-[#38b000]">IA</span>
						</div>
					</h3>
				</div>
				<div className="flex gap-3 justify-center">
					<a
						href="/"
						className="text-primaryTxt text-sm border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
					>
						Download CV
					</a>
					<a
						href="/"
						className="text-[#212121] text-sm border-2 border-[#f1faee] bg-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-primaryBg hover:text-primaryTxt mt-2"
					>
						Know More
					</a>
				</div>
			</div>

			<div className="bottom-28 absolute">
				<Anime
					translateY={15}
					duration={1000}
					direction={"alternate"}
					loop={true}
					easing={"easeInOutQuad"}
				>
					<a href="#aboutme">
						<CaretDownFill size={18} color="#f1faee" />
					</a>{" "}
				</Anime>
			</div>

			<div className="absolute top-1/4 -left-10 -rotate-90">
				<h4 className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt">
					<a href="tel:+91 88055 66621">+91 88055 66621</a>
				</h4>
			</div>

			<div className="absolute bottom-1/3 -left-[90px] -rotate-90">
				<h4 className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt">
					<a href="mailto:pushkar.jadhao@gmail.com">
						pushkar@thefortyseven.dev
					</a>
				</h4>
			</div>

			<div className="absolute right-5 top-10 rotate-90">
				<h4
					className="font-['Share_Tech_Mono'] text-[18px] text-primaryTxt"
					title="Total Views"
				>
					105320
				</h4>
			</div>

			<div className="absolute right-10 bottom-40 flex flex-col gap-8 items-center justify-center">
				<a
					href=""
					className="transition duration-300 ease-in-out hover:opacity-60"
				>
					<Linkedin size={18} color="#f1faee" />
				</a>
				<a
					href=""
					className="transition duration-300 ease-in-out hover:opacity-60"
				>
					<Instagram size={18} color="#f1faee" />
				</a>
				<a
					href=""
					className="transition duration-300 ease-in-out hover:opacity-60"
				>
					<Discord size={18} color="#f1faee" />
				</a>
				<a
					href=""
					className="transition duration-300 ease-in-out hover:opacity-60"
				>
					<Facebook size={18} color="#f1faee" />
				</a>
				<div className="border h-24 w-0 border-[#f1faee]"></div>
			</div>
		</div>
	);
};

export default Home;
