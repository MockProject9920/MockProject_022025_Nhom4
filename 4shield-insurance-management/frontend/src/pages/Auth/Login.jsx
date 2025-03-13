import { useState } from "react";
import loginBg from "@/assets/img/background.png";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "admin@konato.com" && password === "123456") {
			alert("Login successful!");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div
			style={{ backgroundImage: `url(${loginBg})` }}
			className="bg-cover bg-center h-screen"
		>
			<div className="flex min-h-screen items-center justify-center">
				<div className="w-full max-w-screen-md px-14 py-12 bg-white shadow-2xl">
					<h2 className="text-3xl font-semibold text-center capitalize mb-4">
						Login
					</h2>
					<p className="text-muted-foreground text-center text-base mb-6 font-light">
						Enter Login details to get access
					</p>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="pt-9 pb-16">
							<div>
								<label className="block text-gray-700 mb-2 capitalize font-medium">
									Username or Email Address
								</label>
								<input
									type="email"
									className="w-full h-12 px-6 py-0 mt-1 border focus:border-slate-300 outline-none"
									placeholder="Username / Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div>
								<label className="block text-gray-700 mb-2 capitalize font-medium">
									Password
								</label>
								<input
									type="password"
									className="w-full h-12 px-6 py-0 mt-1 mb-5 border focus:border-slate-300 outline-none"
									placeholder="Enter password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex items-center justify-between mb-4">
								<label className="flex items-center text-gray-700 capitalize font-medium">
									<input type="checkbox" className="mr-2" />
									Keep Me Logged In
								</label>
								<a
									href="#"
									className="text-xs font-normal text-cyan-600  hover:text-cyan-800 cursor-pointer"
								>
									Forgot Password?
								</a>
							</div>
						</div>

						<div className="flex justify-between items-center">
							<p className="text-center text-muted-foreground font-light">
								Don't have an account?{" "}
								<a
									href="#"
									className="text-cyan-500  hover:text-cyan-800 cursor-pointer"
								>
									Sign Up
								</a>
								&nbsp;here
							</p>
							<button
								type="submit"
								className="h14 bg-cyan-400 capitalize text-white py-3 px-10 hover:bg-cyan-500 transition"
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
