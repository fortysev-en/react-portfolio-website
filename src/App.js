/** @format */

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import Anime, { anime } from "react-anime";
import StickyNav from "./components/helpers/StickyNav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	const HomeRef = useRef();
	const AboutRef = useRef();
	const SkillsRef = useRef();
	const PortfolioRef = useRef();
	const TimelineRef = useRef();
	const ContactRef = useRef();

	const [offY, setOffY] = useState(null);
	useEffect(() => {
		document.title = "Pushkar Jadhav | Portfolio";
		const offsets = {
			home: HomeRef.current.offsetTop - 150,
			aboutme: AboutRef.current.offsetTop - 150,
			skills: SkillsRef.current.offsetTop - 150,
			portfolio: PortfolioRef.current.offsetTop - 150,
			timeline: TimelineRef.current.offsetTop - 150,
			contact: ContactRef.current.offsetTop - 150,
		};
		setOffY(offsets);
	}, []);

	return (
		<section className="p-10 flex flex-col items-center justify-center">
			<StickyNav offsets={offY ? offY : null} />
			<Home refs={HomeRef} />
			<AboutMe refs={AboutRef} />
			<Skills refs={SkillsRef} />
			<Portfolio refs={PortfolioRef} />
			<Timeline refs={TimelineRef} />
			<Contact refs={ContactRef} />
			<Footer />
		</section>
	);
}
