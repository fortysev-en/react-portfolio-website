/** @format */

import React from "react";
import TimelineItem from "./helpers/TimelineItem";
import timelineOne from "../assests/timelineOne.svg";
import timelineTwo from "../assests/timelineTwo.svg";
import timelineThree from "../assests/timelineThree.svg";

const Timeline = () => {
	return (
		<div
			id="timeline"
			className="relative flex flex-col items-center w-full py-5 mt-[2.5in]"
		>
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-20">
				Timeline
			</h1>
			<div className="flex gap-5 absolute right-20 top-40">
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#06d6a0] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Employment
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FF9704] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Freelance Projects
					</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="h-3 w-3 bg-[#FFF] rounded-full"></div>
					<span className="font-['Share_Tech_Mono'] text-[16px] text-primaryTxt">
						Education
					</span>
				</div>
			</div>
			<div className="flex justify-between flex-col w-[70%]">
				{/* article start*/}
				<div className="flex items-center gap-40 border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="absolute bg-primaryBg border-[#06d6a0] border-4 rounded-full w-14 h-14 flex items-center justify-center -top-[10px] -left-[30px]">
						<h4 className="text-primaryTxt">9</h4>
					</div>
					<div className="px-16 py-10 w-[45%]">
						<TimelineItem
							type="employment"
							duration={"2020 - Present"}
							title={"Cybage Software PVT. LTD"}
							designation={"Web Developer"}
							description={[
								"Build web applications with web development best practices.",
								"Transform app designs into front-end code with HTML, CSS, and JavaScript.",
								"Work with back-end developers to integrate UI components with APIs and databases.",
								"Gather and refine specifications and requirements based on technical requirements or UX design.",
								"Debug HTML/CSS/JS related bugs resulting build issues of Google Cloud.",
							]}
						/>

						<div className="absolute bg-primaryBg border-[#06d6a0] bottom-[36%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">8</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2021 - 2022"}
								title={
									"Burnwood - An Open Source, Python Based Cross Platform Tool"
								}
								designation={"Freelance Project"}
								description={[
									"Burnwood is an open source, cross-platform tool used to generate Windows Exploitation Packages (A Malware). The tool is capable of generating Windows Executables consisting of a malware masking behind any normal file. The results could be used to study the vulnerabilities, and ultimately will help you prevent them. Burnwood provides two delivery methods, Email Based (Gmail) and State-of-The-Art Cloud Based (Google's Firebase). Both of these methods works on Google Services and has it's own pros and cons.",
								]}
							/>
						</div>
					</div>
					<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
					<div className="w-[500px]">
						<img src={timelineTwo} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}

				{/* article start*/}
				<div className="flex gap-40 items-center justify-end border-r-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="w-[500px]">
						<img src={timelineOne} alt="Timeline Img" />
					</div>
					<div className="absolute border-t-4 border-r-4 rounded-tr-3xl w-[100px] h-[100px] -right-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="absolute bg-primaryBg border-[#06d6a0] top-[10%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] top-56">
						<h4 className="text-primaryTxt">7</h4>
					</div>
					<div className="absolute w-[100px] h-[100px] bg-primaryBg -bottom-[50px] left-0"></div>

					<div className="px-14 py-10 w-[45%] float-right">
						<TimelineItem
							type="employment"
							duration={"2017 - 2020"}
							title={"Concentrix Daksh PVT. LTD"}
							designation={"Development Support"}
							description={[
								"Resolve product related or service related issues by performing activities such as debugging and troubleshooting.",
								"Use different set of tools to troubleshoot any service related issues and fix them.",
								"Provide Knowledge Training to Clients over call, message, email or chat along with Application Support.",
								"Contact customers to respond to inquiries or to notify them of claim investigation results or any planned adjustments.",
							]}
						/>

						<div className="absolute bg-primaryBg border-[#06d6a0] bottom-[25%] border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] bottom-24">
							<h4 className="text-primaryTxt">6</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2019 - 2020"}
								title={"Full Stack Web Development"}
								designation={"Freelance Project"}
								description={[
									"First Web Development freelance project. A Simple dynamicwebsite, freely hosted on EPIZY as their sub-domain.",
								]}
								link="/"
							/>
						</div>
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
				<div className="flex gap-40 items-center border-l-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="absolute border-t-4 border-l-4 rounded-tl-3xl w-[100px] h-[100px] -left-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="absolute bg-primaryBg border-[#06d6a0] border-4 top-[10%] rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
						<h4 className="text-primaryTxt">5</h4>
					</div>
					<div className="px-14 py-10 w-[45%]">
						<TimelineItem
							type="education"
							duration={"2013 - 2017"}
							title={"Bachelor of Engineering (Computer Science)"}
							designation={
								"Savitribai Phule Pune University (formerly, University of Pune)"
							}
						/>

						<div className="absolute bg-primaryBg border-[#06d6a0] top-[30%] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">4</h4>
						</div>

						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2017 - 2020"}
								title={"Android Development"}
								designation={"Freelance Project"}
								description={[
									"ROM Development - Developed latest (at that period) Android ROM [7.0] exclusively for outdated Sony Experia Acro S with the sources available from Google as an AOSP project.",
									"Stock Application Port - Ported all the stock applications of Sony to be compatable for all general Android devices.",
								]}
								link="/"
								link2="/"
							/>
						</div>

						<div className="absolute bg-primaryBg border-[#06d6a0] border-4 bottom-[32%] rounded-full w-14 h-14 flex items-center justify-center -left-[30px]">
							<h4 className="text-primaryTxt">3</h4>
						</div>
						<div className="mt-20">
							<TimelineItem
								type="freelance"
								duration={"2020"}
								title={
									"Classification and Prediction of Rice Crop Diseases Using CNN and PNN"
								}
								designation={"Engineering Project"}
								description={[
									"Rice production in India is an important part of the national economy. India is the world's 2nd largest producer with approximately 43 Mio Ha planted area, account ing for 22% of the world's rice production. The physiological diseases in rice crops are highly common and can be predicted through the structural abnormalities in the leaves. Our system proposes a solution to predict few of these disease conditions in cluding 'Brown Spot','Hispa','LeafBlast', and a Healthy Rice Crop. The main aim of this proposed system is to optimize identification and monitoring of rice crops us ing technologies like:-image processing, neural networks, forward feedback mechanism. We hope this forms a basis for other systems as well.",
								]}
								link="/"
							/>
						</div>
					</div>
					<div className="w-[100px] h-[100px] bg-primaryBg absolute -right-[50px] -bottom-[50px]"></div>
					<div className="w-[500px]">
						<img src={timelineThree} alt="Timeline Img" />
					</div>
				</div>
				{/* article end */}
				{/* article start*/}
				<div className="border-r-4 border-b-4 border-[#06d6a0] rounded-3xl w-[98%] relative">
					<div className="absolute border-t-4 border-r-4 rounded-tr-3xl w-[100px] h-[100px] -right-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="absolute bg-primaryBg border-[#06d6a0] top-1/3 border-4 rounded-full w-14 h-14 flex items-center justify-center -right-[30px] top-56">
						<h4 className="text-primaryTxt">2</h4>
					</div>
					<div className="absolute w-[100px] h-[100px] bg-primaryBg -bottom-[50px] left-0"></div>
					<div className="px-14 py-10 w-[45%] float-right">
						<TimelineItem
							type="education"
							duration="2011 - 2013"
							title="HSC - 12th Grade"
							designation="Maharashtra State Board of Secondary and Higher Secondary Board, Pune"
						/>
					</div>
				</div>
				{/* article end */}

				{/* article start*/}
				<div className="border-l-4 border-[#06d6a0] rounded-tl-3xl w-[98%] relative">
					<div className="absolute border-t-4 border-l-4 rounded-tl-3xl w-[100px] h-[100px] -left-[4px] -top-[4px] border-[#06d6a0]"></div>
					<div className="absolute bg-primaryBg border-[#06d6a0] border-4 rounded-full w-14 h-14 flex items-center justify-center -left-[30px] bottom-0">
						<h4 className="text-primaryTxt">1</h4>
					</div>
					<div className="px-14 py-10 w-[45%]">
						<TimelineItem
							type="education"
							duration="2010 - 2011"
							title="SSC - 10th Grade"
							designation="Maharashtra State Board of Secondary and Higher Secondary Board, Pune"
						/>
					</div>
				</div>
				{/* article end */}
			</div>
		</div>
	);
};

export default Timeline;
