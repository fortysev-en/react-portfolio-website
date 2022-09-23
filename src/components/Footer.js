/** @format */

import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import navLogoTxtLight from "../assests/navLogoTxtLight.svg";

const Footer = () => {
	return (
		<footer className="w-full mt-[2.5in]">
			<div className="flex justify-between gap-10 flex-col md:flex-row">
				<div className="w-full rounded-3xl h-[400px] md:h-[300px] flex flex-col md:flex-row justify-between py-12 px-20 md:px-32 items-center bg-secondaryBg">
					<div className="w-[200px]">
						<img src={navLogoTxtLight} alt="FOOTER LOGO" />
					</div>
					<div className="flex md:w-1/2 w-full gap-32 h-full justify-end ">
						<div className="flex flex-col justify-around md:justify-between h-full mt-10 md:mt-0">
							<h1 className="text-primaryTxt opacity-80 text-sm">CONNECT</h1>
							<ul className="">
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										LinkedIn
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Instagram
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Discord
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Facebook
									</li>
								</a>
							</ul>
						</div>
						<div className="flex flex-col justify-around mt-10 md:mt-0 md:justify-between h-full">
							<h1 className="text-primaryTxt opacity-80 text-sm">EXPLORE</h1>
							<ul className="">
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										About Me
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Skills
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Portfolio
									</li>
								</a>
								<a href="">
									<li className="opacity-60 text-primaryTxt text-sm my-3 transition duration-300 ease-in-out hover:opacity-100 font-light">
										Timeline
									</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between md:w-1/2 border-2 border-[#353535] rounded-3xl h-[300px] py-12 px-10">
					<div>
						<h1 className="text-primaryTxt">Latest News</h1>
						<p className="text-primaryTxt opacity-50 text-sm font-light my-2">
							Chuck your email address in here to stay up to date with all the
							cool blogs and tools, directly into your inbox!
						</p>
						<p className="inline text-primaryTxt opacity-50 text-sm font-light my-4">
							For more direct information,{" "}
						</p>
						<a
							href="/"
							className="inline text-sm transition duration-300 text-primaryTxt ease-in-out hover:opacity-50"
						>
							click here!
						</a>
					</div>
					<form className="relative w-full">
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none px-3"
							placeholder="Email Address"
						></input>
						<button className="subscribe absolute w-[100px] h-10 right-0 p-1 text-[#999] border-2 border-[#666] rounded-xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] hover:border-[#f1faee]">
							<div className="subscribeIcon flex justify-center items-center">
								<ArrowRight color="#f1faee" size={22} />
							</div>
						</button>
					</form>
				</div>
			</div>
			<div className="md:float-right my-14">
				<h1 className="text-primaryTxt text-xs text-center font-light opacity-50">
					Copyright {new Date().getFullYear()} © Pushkar Jadhav, All Rights
					Reserved.
				</h1>
				<span className="text-primaryTxt text-xs font-light block text-center md:float-right my-1">
					&#8212; designed and developed by Pushkar Jadhav
				</span>
			</div>
		</footer>
	);
};

export default Footer;
