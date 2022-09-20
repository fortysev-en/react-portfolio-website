/**
 * @format
 * @type {import('tailwindcss').Config}
 */

 module.exports = {
		content: ["./src/**/*.{js,jsx,ts,tsx}"],
		theme: {
			colors: {
				primaryBg: "#1e2023",
				secondaryBg: "#141517",

				primaryTxt: "#ffffff",
				// secondaryTxt: "#18191c",
				secondaryTxt: "#f1faee",
				secondaryTxt100: "#565656",
			},
			extend: {
				keyframes: {
					slide: {
						"0%": { left: "-50%" },
						"100%": { left: "0%" },
					},
					slideTwo: {
						"0%": { left: "-50%" },
						"100%": { left: "0%" },
					},
					slideThree: {
						"0%": { left: "-50%" },
						"100%": { left: "0%" },
					},
					// slideText: {
					// 	"0%": { "margin-top": "-270px" },
					// 	"5%": { "margin-top": "-180px" },
					// 	"33%": { "margin-top": "-180px" },
					// 	"38%": { "margin-top": "-90px" },
					// 	"66%": { "margin-top": "-90px" },
					// 	"71%": { "margin-top": "0px" },
					// 	"99.99%": { "margin-top": "0px" },
					// 	"100%": { "margin-top": "-270px" },
					// },
				},
				animation: {
					slide: "slide 3s cubic-bezier(.72,-0.01,.4,1)",
					slideTwo: "slideTwo 4s cubic-bezier(.72,-0.01,.4,1)",
					slideThree: "slideThree 5s cubic-bezier(.72,-0.01,.4,1)",
					// slideText: "slideText 5s linear infinite",
				},
				fontFamily: {
					poppins: ["Poppins", "sans-serif"],
					kontanter: ["Kontanter", "sans-serif"],
					Share_Tech_Mono: ['"Share Tech Mono"', "sans-serif"],
					anurati: ["Anurati", "sans-serif"],
				},
			},
		},
		plugins: [],
 };
