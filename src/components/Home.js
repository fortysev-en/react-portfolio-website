/** @format */

import React from "react";
import { Facebook, Linkedin, Instagram, Discord } from "react-bootstrap-icons";
import TerminalBlock from "../components/helpers/TerminalBlock";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<div
			id="home"
			className="flex flex-col items-center justify-center h-screen relative w-full"
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
				y={-300}
			/>
			<h4 className="font-[kontanter] text-2xl text-[#777]">
				Hi! I'M <span className="text-primaryTxt text-4xl mx-1">PUSHKAR</span>,
				A
			</h4>
			<h1 className="font-[kontanter] text-6xl text-primaryTxt my-3">
				FULLSTACK DEVELOPER
			</h1>
			<h4 className="font-[kontanter] text-2xl text-[#777]">
				BASED IN <span className="text-[#f77f00]">IN</span>
				<span className="text-primaryTxt">D</span>
				<span className="text-[#38b000]">IA</span>
			</h4>

			{/* <div className="bottom-28 absolute">
					<Anime
						translateY={15}
						duration={1000}
						direction={"alternate"}
						loop={true}
						easing={"easeInOutQuad"}
					>
						<a href="">
							<CaretDownFill size={18} color="#f1faee" />
						</a>{" "}
					</Anime>
				</div> */}

			{/* <div className="absolute right-64 bottom-36 w-1/4">
					<h1 className="font-[poppins] text-5xl text-primaryTxt font-semibold my-3">
						Pushkar Jadhav
					</h1>
					<h4 className="text-primaryTxt">
						<em>
							"a Programmer by Profession, a Hacker by Choice, and a Blogger by
							Interest."
						</em>
					</h4>
				</div> */}

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
