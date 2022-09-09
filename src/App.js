/** @format */

import "./App.css";
import React from "react";
import ProImg from "./assests/pro_img.JPG";
import { Home, Mail, Briefcase } from "react-feather";
import { Linkedin, Facebook, Instagram } from "react-bootstrap-icons";
import TerminalBlock from "./components/TerminalBlock";

export default function App() {
	return (
		<div className="w-100vw h-screen bg-[#151515] relative">
			<div className="bg-[#e63946] h-full w-1/2 absolute animate-slide">
				<div className="absolute left-20 top-1/3">
					<h1 className="text-[#151515] w-1/2 text-[3rem] leading-none font-[kontanter]">
						Hi!
					</h1>
					<h1 className="text-[#151515] w-1/2 text-[3rem] leading-none font-[kontanter]">
						I'm a
					</h1>
					<h1 className="text-[#f1faee] w-1/2 text-[7rem] leading-none font-[kontanter] drop-shadow-[-10px_10px_0_#222] my-6">
						Fullstack Developer
					</h1>
					<h1 className="text-[#151515] flex text-[3rem] leading-none font-[kontanter]">
						based in India
						<div>
							<div className="h-[5px] w-8 bg-[#fb923c]"></div>
							<div className="h-[5px] w-8 bg-[#f1faee]"></div>
							<div className="h-[5px] w-8 bg-[#4d7c0f]"></div>
						</div>
					</h1>
				</div>
			</div>

			{/* <div className="flex justify-center items-center flex-col w-100vw h-screen">
				<h1 className="text-[#f1faee] text-4xl font-medium">Hi! I'm</h1>
				<h1 className="text-[#f1faee] text-8xl font-[kontanter]">
					PUSHKAR JADHAV
				</h1>
				<h4 className="text-[#FFF] text-2xl font-light">
					Fullstack Developer at{" "}
					<a href="" className="text-[#FFF]">
						Cybage Software Pvt. Ltd
					</a>
					, a Freelancer and a Blogger.
				</h4>
			</div> */}

			<div className="absolute right-20 bottom-20 flex gap-8 flex-col items-center">
				<div className="h-28 border-l border-[#f1faee]"></div>
				<a href="">
					<Linkedin
						size={18}
						color="#f1faee"
						className="transition duration-300 ease-in-out hover:opacity-60"
					/>
				</a>
				<a href="">
					<Facebook
						size={18}
						color="#f1faee"
						className="transition duration-300 ease-in-out hover:opacity-60"
					/>
				</a>
				<a href="">
					<Instagram
						size={18}
						color="#f1faee"
						className="transition duration-300 ease-in-out hover:opacity-60"
					/>
				</a>
			</div>

			<div className="flex justify-center">
				<div className="border-2 shadow-md h-12 w-72 fixed bottom-5 rounded-full bg-[#f1faee] p-2 flex items-center justify-around z-20">
					<a href="">
						<Home size={22} />
					</a>
					<a href="">
						<Briefcase size={22} />
					</a>
					<a href="">
						<Mail size={22} />
					</a>
				</div>
			</div>
		</div>
	);
}
