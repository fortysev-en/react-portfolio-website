/** @format */

import React from "react";
import Anime, { anime } from "react-anime";
import PortfolioItem from "./helpers/PortfolioItem";

const Portfolio = ({ refs }) => {
	return (
		<div id="portfolio" className="flex flex-col w-full py-5" ref={refs}>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Portfolio
			</h1>
			<div className="flex justify-center items-center flex-wrap">
				<Anime
					translateX={anime.stagger(50, { from: "start" })}
					translateY={anime.stagger(50, { from: "center" })}
				>
					<PortfolioItem
						heading="WEBSITE"
						heading2="A Blogging Website - Live"
						type="web"
						title="DYNAMIC BLOGGING WEBSITE"
						description={
							"A Public Blogging Website, completely built with DJango and DTL, hosted on AWS and various other technologies."
						}
						link="https://thefortyseven.dev"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="A Personal Portfolio - Live"
						type="port"
						title="DYNAMIC PERSONAL PORTFOLIO"
						description={
							"Personal Portfolio completely built with DJango and DTL, hosted on AWS and various other technologies."
						}
						link="https://thefortyseven.dev/portfolio"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="Web Development Project - Client"
						type="web"
						title="WEB DEVELOPMENT"
						description={
							"First Web Development freelance project. A Simple dynamic website, freely hosted on EPIZY on their free sub-domain."
						}
						link="http://yogayogcreations.epizy.com"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="Personal Portfolio - GitHub Pages"
						type="port"
						title="PERSONAL PORTFOLIO"
						description={
							"First Personal Portfolio, hosted freely on GitHub Pages and backed with Google's Firebase as serverless backend."
						}
						link="https://fortysev-en.github.io/"
					/>
					<PortfolioItem
						heading="WEBSITE"
						heading2="Personal Blogging Website - GitHub Pages"
						type="web"
						title="PERSONAL BLOGGING WEBSITE"
						description={
							"First Personal Blogging Website, hosted freely on GitHub Pages and backed with Google's Firebase as serverless backend."
						}
						link="https://fortysev-en.github.io/blogs/fortyseven-homepage-complete-list-of-blogs.html"
					/>
					<PortfolioItem
						heading="ANDROID APP"
						heading2="Stock Application Port"
						type="app"
						title="ANDROID APP DEVELOPMENT"
						description={
							"Stock Application Port - Ported all the stock applications of Sony to be compatable for all general Android devices."
						}
						link="https://forum.xda-developers.com/t/apps-ported-mar03-xperia-ported-apps-for-aosp-based-roms.3558430/"
					/>
					<PortfolioItem
						heading="ANDROID ROM"
						heading2="ROM Development"
						type="rom"
						title="ANDROID ROM DEVELOPMENT"
						description={
							"Developed latest (at that period) Android ROM [7.0] exclusively for outdated Sony Experia Acro S with the sources available from Google as an AOSP project."
						}
						link="https://forum.xda-developers.com/t/rom-7-x-nougat-naosp-rom-for-acro-s.3507721/"
					/>
				</Anime>
			</div>
		</div>
	);
};

export default Portfolio;
