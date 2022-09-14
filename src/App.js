/** @format */

import "./App.css";
import React, { useEffect } from "react";
import {
	Facebook,
	Linkedin,
	Instagram,
	Discord,
	CaretDownFill,
	FileEarmarkPerson,
	Mortarboard,
} from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import Anime, { anime } from "react-anime";
import {
	Award,
	Briefcase,
	Folder,
	Home,
	Users,
	Mail,
	Phone,
	User,
	Settings,
	GitHub,
} from "react-feather";
import DevIcon from "devicon-react-svg";

export default function App() {
	useEffect(() => {
		document.title = "Pushkar Jadhav | Portfolio";
	}, []);

	return (
		<section className="p-10">
			{/* <div className="top-0 left-0 absolute bg-[#f1faee] w-36 animate-slide h-screen"></div>
			<div className="top-0 left-0 absolute bg-[#1d3557] w-32 animate-slideTwo h-screen"></div>
			<div className="top-0 left-0 absolute bg-[#e63946] w-28 animate-slideThree h-screen"></div> */}
			{/* <div className="top-0 -left-4 absolute">
				<Anime translateX={"120px"} duration={3000}>
					<div className="bg-[#e63946] w-2 h-screen opacity-80"></div>
				</Anime>
			</div>
			<div className="top-0 -left-4 absolute">
				<Anime translateX={"110px"} duration={4000}>
					<div className="bg-[#f1faee] w-1 h-screen opacity-80"></div>
				</Anime>
			</div> */}
			<div className="flex flex-col items-center justify-center h-screen relative">
				<h4 className="font-[kontanter] text-2xl text-[#777]">
					Hi! I'M <span className="text-[#f1faee] text-4xl mx-1">PUSHKAR</span>,
					A
				</h4>
				<h1 className="font-[kontanter] text-6xl text-[#f1faee] my-3">
					FULLSTACK DEVELOPER
				</h1>
				<h4 className="font-[kontanter] text-2xl text-[#777]">
					BASED IN <span className="text-[#f77f00]">IN</span>
					<span className="text-[#f1faee]">D</span>
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
					<h4 className="font-['Share_Tech_Mono'] text-[18px] text-[#f1faee]">
						<a href="tel:+91 88055 66621">+91 88055 66621</a>
					</h4>
				</div>

				<div className="absolute bottom-1/3 -left-20 -rotate-90">
					<h4 className="font-['Share_Tech_Mono'] text-[18px] text-[#f1faee]">
						<a href="mailto:pushkar.jadhao@gmail.com">
							pushkar@thefortyseven.dev
						</a>
					</h4>
				</div>

				<div className="absolute right-5 top-10 rotate-90">
					<h4
						className="font-['Share_Tech_Mono'] text-[18px] text-[#f1faee]"
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

			<div className="fixed bottom-5 w-full flex items-center justify-center h-20 z-50">
				<div className="flex justify-around items-center w-[18rem] py-2 px-2 rounded-3xl backdrop-blur backdrop-brightness-200 bg-white/30">
					<a href="" className="p-2 bg-[#f1faee] rounded-xl">
						<Home color="#1d3557" size={22} />
					</a>
					<a href="#aboutme" className="p-2 rounded-xl">
						<User color="#f1faee" size={22} />
					</a>
					<a href="" className="p-2 rounded-xl">
						<Settings color="#f1faee" size={22} />
					</a>
					<a href="" className="p-2 rounded-xl">
						<Briefcase color="#f1faee" size={22} />
					</a>
					<a href="" className="p-2 rounded-xl">
						<Mail color="#f1faee" size={22} />
					</a>
				</div>
			</div>

			<div
				id="aboutme"
				className="flex flex-row items-center justify-around mt-[2.5in]"
			>
				<div className="h-64 w-64 bg-[#555]"></div>
				<div className="w-[40%] flex flex-col gap-5">
					<h1 className="text-[#f1faee] font-[kontanter] text-7xl text-center mb-10">
						ABOUT ME
					</h1>
					<div className="flex justify-between mb-10">
						<div className="w-[13rem] h-[13rem] border-2 border-gray-400 backdrop-blur rounded-3xl flex flex-col items-center justify-between p-5">
							<h3 className="text-[#f1faee]">EXPERIENCE</h3>
							<Anime
								scale={[
									{ value: 0.9, easing: "easeOutSine", duration: 500 },
									{ value: 1, easing: "easeInOutQuad", duration: 1000 },
								]}
								duration={3000}
								loop={true}
							>
								<Award color="#2dc653" size={42} />
							</Anime>
							<h3 className="text-[#9ca3af]">5+ Years</h3>
						</div>
						<div className="w-[13rem] h-[13rem] border-2 border-gray-400 backdrop-blur rounded-3xl flex flex-col items-center justify-between p-5">
							<h3 className="text-[#f1faee]">PROJECTS</h3>
							<Anime
								scale={[
									{ value: 0.9, easing: "easeOutSine", duration: 700 },
									{ value: 1, easing: "easeInOutQuad", duration: 1200 },
								]}
								duration={3000}
								loop={true}
							>
								<Folder color="#2dc653" size={42} />
							</Anime>
							<h3 className="text-[#9ca3af]">20+ Active</h3>
						</div>
						<div className="w-[13rem] h-[13rem] border-2 border-gray-400 backdrop-blur rounded-3xl flex flex-col items-center justify-between p-5">
							<h3 className="text-[#f1faee]">CLIENTS</h3>
							<Anime
								scale={[
									{ value: 0.9, easing: "easeOutSine", duration: 900 },
									{ value: 1, easing: "easeInOutQuad", duration: 1400 },
								]}
								duration={3000}
								loop={true}
							>
								<Users color="#2dc653" size={42} />
							</Anime>
							<h3 className="text-[#9ca3af]">100+ Active</h3>
						</div>
					</div>
					<p className="text-[#f1faee] font-light leading-7 tracking-wide">
						Here's a gist, I'm{" "}
						<em className="text-[#f77f00] font-medium">
							a Programmer by Profession, a Hacker by Choice, and a Blogger by
							Interest
						</em>
						. As a graduate, I hold a Bachelors Degree in Computer Science and
						Engineering from Savitribai Phule Pune University (formerly
						University of Pune).
					</p>
					<p className="text-[#f1faee] font-light leading-7 tracking-wide">
						I've worked on several projects throughout years which includes Web
						Development, Graphics Designing, Android Development along with
						Android ROM Development as well.
					</p>
					<p className="text-[#f1faee] font-light leading-7 tracking-wide">
						I believe in qualitative work rather than quantitative and believe
						that my skills will support your brand and/or you to succeed in your
						business and objectives.
					</p>
					<p className="text-[#f1faee] font-light leading-7 tracking-wide">
						Feel free to get in touch.
					</p>
					<a
						href=""
						className="text-[#f1faee] border-2 border-[#f1faee] w-fit px-5 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2"
					>
						Let's Talk
					</a>
				</div>
			</div>

			<div className="flex flex-col items-center mt-[2.5in]">
				<h1 className="text-[#f1faee] font-[kontanter] text-7xl text-center mb-20">
					SKILLS
				</h1>
				<div className="h-screen w-full">
					{/* <div className="border-2 border-gray-400 rounded-xl px-4 py-2 w-fit">
						<div className="flex gap-2 items-center">
							<h3 className="text-[#f1faee]">REACT.JS</h3>
						</div>
						<div className="relative py-2">
							<div className="bg-[#555] w-full my-1">
								<Anime
									keyframes={[{ width: "0%" }, { width: "80%" }]}
									easing={"linear"}
									duration={function () {
										return anime.random(1000, 5000);
									}}
								>
									<div className="border-2 border-[#2dc653] my-1"></div>
								</Anime>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
