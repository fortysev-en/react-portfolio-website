/** @format */

import "./App.css";
import React from "react";
import {
	Facebook,
	Linkedin,
	Instagram,
	Discord,
	CaretDownFill,
	FileEarmarkPerson,
} from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import Anime, { anime } from "react-anime";

export default function App() {
	return (
		<section className="p-10">
			{/* <div className="top-0 left-0 absolute bg-[#f1faee] w-36 animate-slide h-screen"></div>
			<div className="top-0 left-0 absolute bg-[#1d3557] w-32 animate-slideTwo h-screen"></div>
			<div className="top-0 left-0 absolute bg-[#e63946] w-28 animate-slideThree h-screen"></div> */}
			<div className="flex flex-col items-center justify-center h-screen relative">
				<h4 className="font-[kontanter] text-2xl text-[#777]">
					Hi! I'M <span className="text-[#f1faee] text-4xl mx-1">PUSHKAR</span>,
					A
				</h4>
				<h1 className="font-[kontanter] text-7xl text-[#f1faee] mt-8">
					{/* <Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("FULLSTACK DEVELOPER")
								.pauseFor(1500)
								.deleteAll()
								.typeString("PYTHON DEVELOPER")
								.pauseFor(1500)
								.deleteAll()
								.typeString("BLOGGER")
								.pauseFor(1500)
								.start();
						}}
						options={{ loop: true }}
					/> */}
					FULLSTACK DEVELOPER
				</h1>
				<h1 className="font-[kontanter] text-6xl text-[#f1faee] my-2">
					PYTHON DEVELOPER
				</h1>
				<h1 className="font-[kontanter] text-5xl text-[#f1faee] mb-8">
					BLOGGER
				</h1>
				<h4 className="font-[kontanter] text-2xl text-[#777]">
					BASED IN <span className="text-[#f77f00]">IN</span>
					<span className="text-[#f1faee]">D</span>
					<span className="text-[#38b000]">IA</span>
				</h4>

				<div className="bottom-28 absolute">
					<Anime
						translateY={15}
						duration={1000}
						direction={"alternate"}
						loop={true}
						easing={"easeInOutQuad"}
					>
						<a href="">
							<CaretDownFill size={18} color="#f77f00" />
						</a>{" "}
					</Anime>
				</div>

				{/* <div className="absolute right-64 bottom-36 w-1/4">
					<h1 className="font-[poppins] text-5xl text-[#f1faee] font-semibold my-3">
						Pushkar Jadhav
					</h1>
					<h4 className="text-[#f1faee]">
						<em>
							"a Programmer by Profession, a Hacker by Choice, and a Blogger by
							Interest."
						</em>
					</h4>
				</div> */}

				<div className="absolute top-1/4 -left-10 -rotate-90">
					<h4
						className="font-['Share_Tech_Mono'] text-1xl text-[#f1faee]"
						title="Total Views"
					>
						<a href="tel:+91 88055 66621">+91 88055 66621</a>
					</h4>
				</div>

				<div className="absolute bottom-1/3 -left-20 -rotate-90">
					<h4
						className="font-['Share_Tech_Mono'] text-1xl text-[#f1faee]"
						title="Total Views"
					>
						<a href="mailto:pushkar.jadhao@gmail.com">
							pushkar@thefortyseven.dev
						</a>
					</h4>
				</div>

				<div className="absolute right-5 top-10 rotate-90">
					<h4
						className="font-['Share_Tech_Mono'] text-1xl text-[#f1faee]"
						title="Total Views"
					>
						105320
					</h4>
				</div>

				<div className="absolute right-10 bottom-40 flex flex-col gap-8 items-center justify-center">
					<div className="border h-24 w-0"></div>
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
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div className="w-1/3">
					<h1 className="text-[#f1faee] font-[kontanter] text-6xl ">ABOUT</h1>
					<p className="text-[#f1faee] font-extralight font-[poppins]">
						Here's a gist, I'm a Programmer, a Blogger and an Ethical Hacker by
						profession. As a graduate, I hold a Bachelors Degree in Computer
						Science and Engineering from Savitribai Phule Pune University
						(formerly University of Pune). Currently working in Cybage Software
						PVT. LTD, a leading IT services company which mainly delivers
						outsourced software product development.
					</p>
					<p className="text-[#f1faee]">
						I'm living a corporate life for more than five years and have a
						total working experience of a minimum of eight years. Being a
						freelancer, I've worked on several projects throughout years which
						includes Web Development, Graphics Designing, Android Development
						along with Android ROM Development as well.
					</p>
					<p className="text-[#f1faee]">
						Recently, I've developed several Windows Applications with the help
						of Python, Responsive and Interactive Websites with Django and
						ReactJS.
					</p>
					<p className="text-[#f1faee]">
						I believe in qualitative work rather than quantitative and believe
						that my skills will support your brand and/or you to succeed in your
						business and objectives.
					</p>
					<p className="text-[#f1faee]">
						Feel free to get in <a href="#contact">touch</a>.
					</p>
				</div>
			</div>
		</section>
	);
}
