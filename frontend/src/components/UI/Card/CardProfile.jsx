const CardProfile = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md w-full text-center">
			<img
				src="https://placehold.co/100x100"
				alt="User Avatar"
				className="w-24 h-24 mx-auto rounded-full border"
			/>
			<h3 className="text-xl font-semibold text-gray-700 mt-4">John Doe</h3>
			<p className="text-gray-500">Senior Software Engineer</p>
			<p className="mt-2 text-gray-600">
				Passionate about building scalable applications. Experienced in React,
				Tailwind, and backend technologies.
			</p>
			<div className="mt-4 flex justify-center space-x-4">
				<a href="#" className="text-blue-500 hover:text-blue-700">
					Twitter
				</a>
				<a href="#" className="text-blue-500 hover:text-blue-700">
					LinkedIn
				</a>
				<a href="#" className="text-blue-500 hover:text-blue-700">
					GitHub
				</a>
			</div>
		</div>
	);
};

export default CardProfile;
