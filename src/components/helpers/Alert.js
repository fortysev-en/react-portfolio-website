/** @format */

import React, { useEffect, useState } from "react";
import Anime from "react-anime";

const Alert = ({ alert, setAlert, duration, message }) => {
	// const [show, setShow] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAlert(false);
		}, duration);
	}, [alert]);
	return (
		<div className="fixed right-2 bottom-2 z-50">
			<Anime
				// keyframes={[{ translateY: [100, 0] }, { translateY: [0, 100] }]}
				translateY={[100, 0]}
				duration={1000}
				endDelay={3000}
				direction="alternate"
				easing="spring(1, 80, 10, 0)"
			>
				<div className="bg-[#06d6a0] flex items-center w-[400px] px-4 py-2 h-[50px] rounded-2xl">
					<h1 className="text-primaryBg font-semibold text-sm">{message}</h1>
				</div>
			</Anime>
		</div>
	);
};

export default Alert;
