/** @format */

import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import navLogoTxtLight from "../assests/navLogoTxtLight.svg";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "./helpers/Firebase";
import Alert from "./helpers/Alert";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [alert, setAlert] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmail("");
		setAlert(true);
		const docRef = doc(collection(db, "portfolioSubscription"));
		await setDoc(docRef, {
			email: e.target.email.value,
		});
	};

	return (
		<footer className="w-full mt-[2.5in]">
			<div className="flex justify-between gap-10 flex-col xl:flex-row">
				<div className="w-full rounded-3xl h-[400px] xl:h-[300px] flex flex-col xl:flex-row justify-between py-12 px-20 xl:px-32 items-center bg-secondaryBg">
					<div className="w-[200px]">
						<img src={navLogoTxtLight} alt="FOOTER LOGO" />
					</div>
					<div className="flex xl:w-1/2 w-full gap-32 h-full justify-end ">
						<div className="flex flex-col justify-around xl:justify-between h-full mt-10 xl:mt-0">
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
						<div className="flex flex-col justify-around mt-10 xl:mt-0 xl:justify-between h-full">
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
				<div className="flex flex-col justify-between xl:w-1/2 border-2 border-[#353535] rounded-3xl h-[300px] py-12 px-10">
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
					<form className="relative w-full" onSubmit={handleSubmit}>
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none px-3"
							placeholder="Email Address"
							name="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></input>
						<button className="subscribe absolute w-[100px] h-10 right-0 p-1 text-[#999] border-2 border-[#666] rounded-xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] hover:border-[#f1faee]">
							<div className="subscribeIcon flex justify-center items-center">
								<ArrowRight color="#f1faee" size={22} />
							</div>
						</button>
					</form>
				</div>
			</div>
			<div className="xl:float-right my-14">
				<h1 className="text-primaryTxt text-xs text-center font-light opacity-50">
					Copyright {new Date().getFullYear()} © Pushkar Jadhav, All Rights
					Reserved.
				</h1>
				<span className="text-primaryTxt text-xs font-light block text-center xl:float-right my-1">
					&#8212; designed and developed by Pushkar Jadhav
				</span>
			</div>
			{alert ? (
				<Alert
					alert={alert}
					setAlert={setAlert}
					duration={3000}
					message={'Thank you! I"ll soon get in touch!'}
				/>
			) : null}
		</footer>
	);
};

export default Footer;
