/** @format */

import React, { useEffect, useState } from "react";
import {
	Envelope,
	Phone,
	Linkedin,
	Instagram,
	Discord,
	Facebook,
} from "react-bootstrap-icons";

const ContactItem = ({ type }) => {
	const [func, setFunc] = useState(null);

	useEffect(() => {
		if (type === "email") {
			setFunc("mailto: pushkar.jadhao@gmail.com");
		} else if (type === "phone") {
			setFunc("tel: +918805566621");
		} else if (type === "linkedin") {
			setFunc("/");
		} else if (type === "facebook") {
			setFunc("/");
		} else if (type === "instagram") {
			setFunc("/");
		} else if (type === "discord") {
			setFunc("/");
		} else {
		}
	}, [type]);

	return (
		<a
			href={func}
			className="w-[150px] h-[150px] bg-secondaryBg rounded-3xl flex flex-col justify-center items-center transition duration-300 ease-in-out hover:bg-[#111]"
		>
			{type === "email" ? (
				<Envelope color="#f1faee" size={24} />
			) : type === "phone" ? (
				<Phone color="#f1faee" size={24} />
			) : type === "linkedin" ? (
				<Linkedin color="#f1faee" size={24} />
			) : type === "instagram" ? (
				<Instagram color="#f1faee" size={24} />
			) : type === "discord" ? (
				<Discord color="#f1faee" size={24} />
			) : type === "facebook" ? (
				<Facebook color="#f1faee" size={24} />
			) : null}
		</a>
	);
};

export default ContactItem;
