/** @format */

import "./App.css";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Anime, { anime } from "react-anime";
import StickyNav from "./components/helpers/StickyNav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function App() {
	useEffect(() => {
		document.title = "Pushkar Jadhav | Portfolio";
	}, []);

	return (
		<section className="p-10 flex flex-col items-center justify-center">
			<StickyNav />
			<Home />
			<AboutMe />
			<Skills />
			<Timeline />
		</section>
	);
}
