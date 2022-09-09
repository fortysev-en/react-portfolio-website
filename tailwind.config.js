/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slide: {
					"0%": { left: "-50%" },
					"100%": { left: "0%" },
				},
			},
			animation: {
				slide: "slide 3s cubic-bezier(.72,-0.01,.4,1)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				kontanter: ["Kontanter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
