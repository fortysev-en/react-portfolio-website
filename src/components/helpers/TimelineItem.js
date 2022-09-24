/** @format */

import React from "react";
import Anime, { anime } from "react-anime";
import { BoxArrowInUpRight } from "react-bootstrap-icons";

const TimelineItem = (props) => {
	return (
		<Anime
			translateX={20}
			direction={"alternate"}
			loop={true}
			easing={"linear"}
			duration={anime.random(1000, 3000)}
		>
			<div className="bg-secondaryBg p-12 rounded-3xl w-[90%] xl:w-full">
				<span className="text-secondaryTxt opacity-50 text-sm">
					{props.duration}
				</span>
				{props.type === "education" ? (
					<h2 className="text-[#FFF] text-2xl font-medium my-1">
						{props.title}
					</h2>
				) : props.type === "employment" ? (
					<h2 className="text-[#06d6a0] text-2xl font-medium my-1">
						{props.title}
					</h2>
				) : props.type === "freelance" ? (
					<h2 className="text-[#FF9704] text-2xl font-medium my-1">
						{props.title}
					</h2>
				) : null}
				<h5 className="text-secondaryTxt opacity-50 text-sm">
					<em>{props.designation}</em>
				</h5>
				<ul className="mt-5 list-disc">
					{props.description
						? props.description.map((item, id) => (
								<li
									key={id}
									className="text-secondaryTxt opacity-90 my-2 text-sm"
								>
									{item}
								</li>
						  ))
						: null}
				</ul>
				{props.link ? (
					<a
						href={props.link}
						target="_blank"
						className="flex items-center gap-2 text-secondaryTxt opacity-50 text-sm transition duration-300 ease-in-out hover:opacity-100 w-fit"
					>
						Website <BoxArrowInUpRight size={14} color="#FFF" />
					</a>
				) : null}
				{props.link2 ? (
					<a
						href={props.link2}
						target="_blank"
						className="flex items-center gap-2 text-secondaryTxt opacity-50 text-sm transition duration-300 ease-in-out hover:opacity-100 w-fit mt-2"
					>
						Website <BoxArrowInUpRight size={14} color="#FFF" />
					</a>
				) : null}
			</div>
		</Anime>
	);
};

export default TimelineItem;
