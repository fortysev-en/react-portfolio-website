/** @format */

import React from "react";

const Stats = ({ refs, github, wakatime }) => {
	return (
		<div
			className="flex flex-col gap-20 items-center mt-[3.5in] w-[80%] y-5"
			id="stats"
			ref={refs}
		>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Stats
			</h1>

			<div className="w-full p-10 flex flex-col xl:flex-row items-center justify-around rounded-3xl bg-secondaryBg">
				<h1 className="text-secondaryTxt mb-4 text-2xl xl:text-5xl font-bold">
					GITHUB STATS
				</h1>
				<a href={`https://github.com/${github}`}>
					<img
						src={`https://github-readme-stats.vercel.app/api?username=${github}&count_private=true&show_icons=true&bg_color=141517&icon_color=e6e6e6&title_color=e6e6e6&text_color=999999&border_color=141517`}
						alt="Github Stats"
					/>
				</a>
			</div>

			<div className="w-full p-10 flex flex-col xl:flex-row xl:flex-row-reverse items-center justify-around rounded-3xl bg-secondaryBg">
				<h1 className="text-secondaryTxt mb-4 text-2xl text-center xl:text-5xl font-bold">
					WAKATIME WEEKLY STATS
				</h1>
				<a href={`https://wakatime.com/@${wakatime}`}>
					<img
						src={`https://github-readme-stats.vercel.app/api/wakatime?username=${wakatime}&bg_color=141517&icon_color=e6e6e6&title_color=e6e6e6&text_color=999999&border_color=141517&v=2`}
						alt="Wakatime Stats"
					/>
				</a>
			</div>
		</div>
	);
};

export default Stats;
