/** @format */

import React, { useEffect, useState } from "react";
import { anime } from "react-anime";
import {
	Briefcase,
	Home,
	Mail,
	User,
	Settings,
	Calendar,
	Clock,
} from "react-feather";

const StickyNav = ({ offsets }) => {
	const [activeNav, setActiveNav] = useState("home");
	const [posY, setPosY] = useState(0);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			setPosY(window.scrollY);

			if (window.scrollY >= 500) {
				anime({
					targets: ".fixedNav",
					opacity: 1,
					duration: 100,
					easing: "linear",
				});
			} else if (window.scrollY <= 499) {
				anime({
					targets: ".fixedNav",
					opacity: 0,
					duration: 100,
					easing: "linear",
				});
			}
		});
	}, []);

	useEffect(() => {
		if (offsets) {
			if (posY < offsets.aboutme) {
				setActiveNav("home");
			} else if (posY >= offsets.aboutme && posY < offsets.skills) {
				setActiveNav("aboutme");
			} else if (posY >= offsets.skills && posY < offsets.portfolio) {
				setActiveNav("skills");
			} else if (posY >= offsets.portfolio && posY < offsets.stats) {
				setActiveNav("portfolio");
			} else if (posY >= offsets.stats && posY < offsets.timeline) {
				setActiveNav("stats");
			} else if (posY >= offsets.timeline && posY < offsets.contact) {
				setActiveNav("timeline");
			} else if (posY >= offsets.contact) {
				setActiveNav("contact");
			} else {
			}
		}
	}, [window.scrollY, posY]);

	return (
		<div className="fixedNav fixed opacity-0 bottom-5 z-[100] flex justify-around items-center w-[20rem] py-2 px-2 rounded-3xl backdrop-blur backdrop-brightness-200 bg-white/30">
			<a
				href="#home"
				className={
					activeNav === "home"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("home")}
			>
				<Home color="#f1faee" size={22} />
			</a>
			<a
				href="#aboutme"
				className={
					activeNav === "aboutme"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("aboutme")}
			>
				<User color="#f1faee" size={22} />
			</a>
			<a
				href="#skills"
				className={
					activeNav === "skills"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("skills")}
			>
				<Settings color="#f1faee" size={22} />
			</a>
			<a
				href="#portfolio"
				className={
					activeNav === "portfolio"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("portfolio")}
			>
				<Briefcase color="#f1faee" size={22} />
			</a>
			<a
				href="#stats"
				className={
					activeNav === "stats"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("stats")}
			>
				<Clock color="#f1faee" size={22} />
			</a>
			<a
				href="#timeline"
				className={
					activeNav === "timeline"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("timeline")}
			>
				<Calendar color="#f1faee" size={22} />
			</a>
			<a
				href="#contact"
				className={
					activeNav === "contact"
						? "p-2 rounded-xl active active-svg"
						: "p-2 rounded-xl transition duration-300 ease-in-out hover:bg-[#f1faee]"
				}
				onClick={() => setActiveNav("contact")}
			>
				<Mail color="#f1faee" size={22} />
			</a>
		</div>
	);
};

export default StickyNav;
