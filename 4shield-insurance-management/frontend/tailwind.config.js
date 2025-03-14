/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				'custom': '1050px', 
				'custom-end': { 'raw': '(max-width: 1350px)' }, 
			},
			backgroundImage: {
				"bg-login": "url('/src/assets/images/background.png')",
			},
			boxShadow: {
				"2xl": "0px 10px 30px 0px rgba(13,12,13,0.2)",
			},
		},
	},
	plugins: [],
};
