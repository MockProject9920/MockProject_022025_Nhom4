import { Link } from "react-router-dom";

import GridShape from "@common/GridShape";
import PageMeta from "@common/PageMeta";

const NotFound = () => {
	return (
		<>
			<PageMeta
				title="4Shield | 404 - Page Not Found"
				description="This is React.js 404 Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
			/>
			<div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
				<GridShape />
				<div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
					<h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
						ERROR
					</h1>

					<img src="/images/error/404.svg" alt="404" className="dark:hidden" />
					<img
						src="/images/error/404-dark.svg"
						alt="404"
						className="hidden dark:block"
					/>

					<p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
						We can’t seem to find the page you are looking for!
					</p>

					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs"
					>
						Back to Home Page
					</Link>
				</div>
				{/* <!-- Footer --> */}
				<p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
					&copy; {new Date().getFullYear()} - 4Shield Company
				</p>
			</div>
		</>
	);
};

export default NotFound;
