/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-login": "url('/src/assets/background.png')",
			},
			boxShadow: {
				"2xl": "0px 10px 30px 0px rgba(13,12,13,0.2)",
			},
		},
	},
	plugins: [],
};
