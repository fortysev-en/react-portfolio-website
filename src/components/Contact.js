/** @format */

import React, { useState } from "react";
import ContactItem from "../components/helpers/ContactItem";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "./helpers/Firebase";
import Alert from "./helpers/Alert";

const Contact = ({ refs }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");

	const [alert, setAlert] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEmail("");
		setName("");
		setMsg("");
		setAlert(true);
		const docRef = doc(collection(db, "portfolioContact"));
		await setDoc(docRef, {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		});
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
					<ContactItem
						type="linkedin"
						link="https://linkedin.com/in/pushkar-jadhav-511505207"
					/>
					<ContactItem
						type="instagram"
						link="https://www.instagram.com/mr__fortyseven"
					/>
					<ContactItem
						type="discord"
						link="https://discord.com/users/fortyseven#1540"
					/>
					<ContactItem
						type="facebook"
						link="https://www.facebook.com/pushkaraj.jadhao"
					/>
				</div>
				<form onSubmit={handleSubmit} className="xl:w-1/3">
					<div className="flex gap-4">
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none px-3"
							name="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							className="bg-secondaryBg w-full p-2 rounded-xl text-primaryTxt placeholder:text-sm outline-none"
							name="email"
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<textarea
						className="bg-secondaryBg w-full rounded-xl mt-2 p-2 h-[200px] text-primaryTxt placeholder:text-sm outline-none px-3"
						name="message"
						spellCheck={false}
						placeholder="Add Your Message Here"
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
						required
					></textarea>
					<button
						type="submit"
						className="float-right xl:float-left text-[#999] border-2 border-[#666] px-10 py-2 rounded-2xl transition ease-in-out duration-300 hover:bg-[#f1faee] hover:text-[#212121] hover:border-[#f1faee] mt-2"
					>
						SEND
					</button>
				</form>
			</div>
			{alert ? (
				<Alert
					alert={alert}
					setAlert={setAlert}
					duration={3000}
					message={'Thank you! I"ll soon get in touch!'}
				/>
			) : null}
		</div>
	);
};

export default Contact;
