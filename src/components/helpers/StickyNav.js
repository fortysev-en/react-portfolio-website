/** @format */

import React from "react";
import { Briefcase, Home, Mail, User, Settings, Calendar } from "react-feather";
const StickyNav = () => {
	return (
		<div className="fixedNav fixed bottom-5 z-[100] flex justify-around items-center w-[20rem] py-2 px-2 rounded-3xl backdrop-blur backdrop-brightness-200 bg-white/30">
			<a href="#home" className="p-2 bg-[#f1faee] rounded-xl">
				<Home color="#1d3557" size={22} />
			</a>
			<a
				href="#aboutme"
				className="p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee] "
			>
				<User color="#f1faee" size={22} />
			</a>
			<a
				href="#skills"
				className="p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee] "
			>
				<Settings color="#f1faee" size={22} />
			</a>
			<a
				href="#timeline"
				className="p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
			>
				<Calendar color="#f1faee" size={22} />
			</a>
			<a
				href="#portfolio"
				className="p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
			>
				<Briefcase color="#f1faee" size={22} />
			</a>
			<a
				href="#contact"
				className="p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
			>
				<Mail color="#f1faee" size={22} />
			</a>
		</div>
	);
};

export default StickyNav;
