/** @format */

import React from "react";
import Typewriter from "typewriter-effect";
import Draggable from "react-draggable";
import { Maximize2 } from "react-feather";

const TerminalBlock = () => {
	return (
		<h1 className="text-[#f1faee] text-6xl font-bold">
			<Draggable defaultPosition={{ x: 150, y: 50 }}>
				<div
					className="bg-[#282828] rounded-xl select-none shadow-[-25px_25px_0px_#00000030]"
					style={{ width: "450px", height: "845px" }}
				>
					<div className="flex justify-between items-center px-2 bg-[#444444] h-5 rounded-t-xl	">
						<div className="flex gap-1">
							<div className="h-2 w-2 rounded-full bg-[#DA1B1B]"></div>
							<div className="h-2 w-2 rounded-full bg-[#FFC700]"></div>
							<div className="h-2 w-2 rounded-full bg-[#00DFAA]"></div>
						</div>
						<div>
							<Maximize2 size={10} color="#FFF" />
						</div>
					</div>
					<h6 className="w-80 ml-3 font-normal text-sm mt-5">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString(
										'<span style="color: #FFF;">class</span> <span style="color: #00DFAA;">Portfolio</span> <span style="color: #EBB376;">{</span><br>'
									)
									.pauseFor(800)

									.typeString(
										'&emsp;&emsp;<span style="color: #5685EF;">constructor</span><span style="color: #FFF;">(){</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;<span style="color: #5685EF;">this</span><span style="color: #FFF;">.</span><span style="color: #A7C1FB;">name</span><span style="color: #FFF;"> = </span><span style="color: #F28F8F;">"Pushkar Jadhav"</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&ensp;&ensp;<span style="color: #FFF;">}</span><br><br>'
									)
									.pauseFor(800)

									.typeString(
										'&ensp;&ensp;<span style="color: #EBB376;">skillSet</span><span style="color: #FFF;">() {</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;<span style="color: #5685EF;">const </span><span style="color: #A7C1FB;">skills</span><span style="color: #FFF;"> = </span><span style="color: #EBB376;">{</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">webDevelopment : </span><span style="color: #FFF;">{</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">profile : </span><span style="color: #F28F8F;">"Full Stack Developer"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">frontend : </span><span style="color: #FFF;">(</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"React.JS"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Bootstrap"<br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #FFF;">),</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">backend : </span><span style="color: #FFF;">(</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"DJango"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Node.JS"</span><span style="color: #FFF;"></span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #FFF;">)</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #EBB376;">}</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">uxUI : </span><span style="color: #FFF;">{</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">tools : </span><span style="color: #FFF;">(</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Figma"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Adobe XD"</span><span style="color: #FFF;"></span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #FFF;">)</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #EBB376;">}</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">dataScience : </span><span style="color: #FFF;">{</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">tools : </span><span style="color: #FFF;">(</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Power BI"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Tableau"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Jupyter"</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #FFF;">)</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #EBB376;">}</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #5685EF;">libraries : </span><span style="color: #FFF;">(</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Pandas"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"NumPy"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"matplotlib"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"SciPy"</span><span style="color: #FFF;">,</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #F28F8F;">"Scikit-learn"</span><span style="color: #FFF;"></span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;&emsp;<span style="color: #FFF;">)</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;&emsp;<span style="color: #EBB376;">}</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;&emsp;<span style="color: #FFF;">};</span><br>'
									)
									.pauseFor(50)
									.typeString(
										'&emsp;&emsp;<span style="color: #FFF;">};</span><br>'
									)
									.pauseFor(50)

									.typeString(
										'<span style="color: #EBB376;">}</span><span style="color: #FFF;">;</span>'
									)
									.pauseFor(50)

									.start();
							}}
						/>
					</h6>
				</div>
			</Draggable>
		</h1>
	);
};

export default TerminalBlock;
