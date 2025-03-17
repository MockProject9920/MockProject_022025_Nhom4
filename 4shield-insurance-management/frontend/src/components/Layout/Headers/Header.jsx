/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// component
import NotificationDropdown from "@components/Layout/Headers/NotificationDropdown";
import UserDropdown from "@components/Layout/Headers/UserDropdown";
import ThemeToggleButton from "@common/ThemeToggleButton";
import { useSidebar } from "@contexts/SidebarContext";
import { FiSearch } from "react-icons/fi";

const Header = () => {
	const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
	const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

	const handleToggle = () => {
		if (window.innerWidth >= 991) {
			toggleSidebar();
		} else {
			toggleMobileSidebar();
		}
	};

	const toggleApplicationMenu = () => {
		setApplicationMenuOpen(!isApplicationMenuOpen);
	};

	const inputRef = useRef(null);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if ((event.metaKey || event.ctrlKey) && event.key === "k") {
				event.preventDefault();
				if (inputRef.current) {
					inputRef.current.focus();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
			<div className="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
				<div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
					<button
						className="z-99999 flex h-10 w-10 items-center justify-center rounded-lg border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400 lg:h-11 lg:w-11 lg:border lg:bg-transparent dark:lg:bg-transparent bg-gray-100 dark:bg-gray-800"
						onClick={handleToggle}
						aria-label="Toggle Sidebar"
					>
						{isMobileOpen ? "✖" : "☰"}
					</button>
					<Link to="/" className="lg:hidden">
						<img
							className="dark:hidden"
							src="./images/logo/logo.svg"
							alt="Logo"
						/>
						<img
							className="hidden dark:block"
							src="./images/logo/logo-dark.svg"
							alt="Logo"
						/>
					</Link>
					<button
						onClick={toggleApplicationMenu}
						className="w-10 h-10 text-gray-700 dark:text-gray-400 lg:hidden"
					>
						⋮
					</button>
					<div className="hidden lg:block">
						<form>
							<div className="relative">
								<span className="absolute left-4 top-1/2 -translate-y-1/2">
									<FiSearch />
								</span>
								<input
									ref={inputRef}
									type="text"
									placeholder="Search or type command..."
									className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
								/>
								<button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
								<span>⌘</span>
								<span>K</span>
								</button>
							</div>
						</form>
					</div>
				</div>
				<div
					className={`${
						isApplicationMenuOpen ? "flex" : "hidden"
					} w-full items-center justify-between gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none hidden`}
				>
					<ThemeToggleButton />
					<NotificationDropdown />
					<UserDropdown />
				</div>
			</div>
		</header>
	);
};

export default Header;
