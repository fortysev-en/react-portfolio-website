/** @format */

import React, { useState } from "react";
import ContactItem from "../components/helpers/ContactItem";
import Alert from "./helpers/Alert";

const Contact = ({ refs }) => {
	const [alert, setAlert] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 3000);
	};

	return (
		<div className="relative w-full mt-[2.5in]" ref={refs} id="contact">
			<h1 className="text-primaryTxt text-7xl font-medium text-center mb-40">
				Contact
			</h1>
			<div className="flex items-center flex-col xl:flex-row justify-center gap-10">
				<div className="flex gap-5 flex-wrap justify-center xl:w-1/3">
					<ContactItem type="email" />
					<ContactItem type="phone" />
					<ContactItem type="linkedin" />
					<ContactItem type="instagram" />
					<ContactItem type="discord" />
					<ContactItem type="facebook" />
				</div>
				<form onSubmit={handleSubmit} className="xl:w-1/3">
					<div className="flex gap-4">
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none px-3"
							name="name"
							type="text"
							placeholder="Name"
						/>
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none"
							name="email"
							type="email"
							placeholder="Email Address"
						/>
					</div>
					<textarea
						className="bg-secondaryBg w-full rounded-xl mt-2 p-2 h-[200px] text-primaryTxt placeholder:text-sm outline-none px-3"
						name="message"
						spellCheck={false}
						placeholder="Add Your Message Here"
					></textarea>
					<button
						type="submit"
						// className="block border-2 text-primaryTxt px-10 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] mt-2 border-[#f1faee]"
						className="float-right xl:float-left text-[#999] border-2 border-[#666] px-10 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] hover:border-[#f1faee] mt-2"
					>
						SEND
					</button>
				</form>
			</div>
			{alert ? <Alert /> : null}
		</div>
	);
};

export default Contact;
