import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Import icons
import { FiBox } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { FaChevronDown, FaMoneyCheckAlt, FaUserSecret } from "react-icons/fa";
import { MdContactPage, MdOutlinePayment } from "react-icons/md";
import { AiFillDashboard, AiOutlineTransaction } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { TbContract } from "react-icons/tb";
import { BsBuildingsFill, BsFillShieldFill } from "react-icons/bs";

import { useSidebar } from "@contexts/SidebarContext";

const navItems = [
	{
		icon: <AiFillDashboard />,
		name: "Dashboard",
		path: "/admin",
	},
	{
		icon: <FaUserGroup />,
		name: "User Management",
		path: "/user-management",
		subItems: [
			{ name: "Customer", path: "/user-management/customer" },
			{ name: "Employee", path: "/user-management/employee" },
			{ name: "Role", path: "/user-management/role" },
		],
	},
	{
		icon: <TbContract />,
		name: "Contract Management",
		path: "/contract-management",
		subItems: [
			{ name: "List Contract", path: "/contract-management/list" },
			{ name: "New Contract", path: "/contract-management/new" },
			{ name: "View Contract", path: "/contract-management/view" },
		],
	},
	{
		icon: <BsFillShieldFill />,
		name: "Insurance Management",
		path: "/insurance-management",
		subItems: [
			{ name: "Product", path: "/insurance-management/product" },
			{ name: "Premium", path: "/insurance-management/premium" },
		],
	},
	{
		icon: <BsBuildingsFill />,
		name: "Property Management",
		path: "/property-management",
		subItems: [
			{ name: "List Property", path: "/property-management/list" },
			{ name: "New Property", path: "/property-management/new" },
		],
	},
	{
		icon: <AiOutlineTransaction />,
		name: "Transaction & Invoice",
		path: "/transaction-management",
		subItems: [
			{ name: "Transaction", path: "/transaction-management/transaction" },
			{ name: "Invoice", path: "/transaction-management/invoice" },
		],
	},
	{
		icon: <MdOutlinePayment />,
		name: "Payment Management",
		path: "/payment-management",
		subItems: [
			{ name: "Premium Tracking", path: "/payment-management/tracking" },
			{ name: "Premium Detail", path: "/payment-management/detail" },
		],
	},
	{
		icon: <FaMoneyCheckAlt />,
		name: "Claim Management",
		path: "/claim-management",
		subItems: [
			{ name: "Processing", path: "/claim-management/processing" },
			{ name: "Request Detail", path: "/claim-management/request-detail" },
			{
				name: "Settlement Tracking",
				path: "/claim-management/settlement-tracking",
			},
		],
	},
	{
		icon: <FaUserSecret />,
		name: "Appraisers",
		path: "/appraisers",
		subItems: [
			{ name: "Appraiser List", path: "/appraisers/list" },
			{ name: "Appraiser Request", path: "/appraisers/request" },
			{ name: "Request Detail", path: "/appraisers/request-detail" },
			{ name: "Assessment Report", path: "/appraisers/assessment-report" },
			{ name: "Report Detail", path: "/appraisers/report-detail" },
		],
	},
];

const othersItems = [
	{
		icon: <SlCalender />,
		name: "Charts",
		subItems: [
			{ name: "Line Chart", path: "/line-chart" },
			{ name: "Bar Chart", path: "/bar-chart" },
		],
	},
	{
		icon: <FiBox />,
		name: "UI Elements",
		subItems: [
			{ name: "Alerts", path: "/alerts" },
			{ name: "Avatar", path: "/avatars" },
			{ name: "Badge", path: "/badge" },
			{ name: "Buttons", path: "/buttons" },
			{ name: "Images", path: "/images" },
			{ name: "Videos", path: "/videos" },
		],
	},
	{
		icon: <SlCalender />,
		name: "Authentication",
		subItems: [
			{ name: "Sign In", path: "/signin" },
			{ name: "Sign Up", path: "/signup" },
		],
	},
];

const Sidebar = () => {
	const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
	const location = useLocation();

	const [openSubmenu, setOpenSubmenu] = useState(null);
	const [subMenuHeight, setSubMenuHeight] = useState({});
	const subMenuRefs = useRef({});

	const isActive = useCallback(
		(path) => location.pathname === path,
		[location.pathname]
	);

	useEffect(() => {
		let submenuMatched = false;
		["main", "others"].forEach((menuType) => {
			const items = menuType === "main" ? navItems : othersItems;
			items.forEach((nav, index) => {
				if (nav.subItems) {
					nav.subItems.forEach((subItem) => {
						if (isActive(subItem.path)) {
							setOpenSubmenu({ type: menuType, index });
							submenuMatched = true;
						}
					});
				}
			});
		});

		if (!submenuMatched) {
			setOpenSubmenu(null);
		}
	}, [location, isActive]);

	useEffect(() => {
		if (openSubmenu !== null) {
			const key = `${openSubmenu.type}-${openSubmenu.index}`;
			if (subMenuRefs.current[key]) {
				setSubMenuHeight((prev) => ({
					...prev,
					[key]: subMenuRefs.current[key]?.scrollHeight || 0,
				}));
			}
		}
	}, [openSubmenu]);

	const handleSubmenuToggle = (index, menuType) => {
		setOpenSubmenu((prev) =>
			prev && prev.type === menuType && prev.index === index
				? null
				: { type: menuType, index }
		);
	};

	const renderMenuItems = (items, menuType) => (
		<ul className="flex flex-col gap-4">
			{items.map((nav, index) => (
				<li key={nav.name}>
					{nav.subItems ? (
						<button
							onClick={() => handleSubmenuToggle(index, menuType)}
							className={`menu-item group ${
								openSubmenu?.type === menuType && openSubmenu?.index === index
									? "menu-item-active"
									: "menu-item-inactive"
							} cursor-pointer ${
								!isExpanded && !isHovered
									? "lg:justify-center"
									: "lg:justify-start"
							}`}
						>
							<span
								className={`menu-item-icon-size ${
									openSubmenu?.type === menuType && openSubmenu?.index === index
										? "menu-item-icon-active"
										: "menu-item-icon-inactive"
								}`}
							>
								{nav.icon}
							</span>
							{(isExpanded || isHovered || isMobileOpen) && (
								<span className="menu-item-text">{nav.name}</span>
							)}
							{(isExpanded || isHovered || isMobileOpen) && (
								<FaChevronDown
									className={`ml-auto w-5 h-5 transition-transform duration-200 ${
										openSubmenu?.type === menuType &&
										openSubmenu?.index === index
											? "rotate-180 text-brand-500"
											: ""
									}`}
								/>
							)}
						</button>
					) : (
						nav.path && (
							<Link
								to={nav.path}
								className={`menu-item group ${
									isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
								}`}
							>
								<span
									className={`menu-item-icon-size ${
										isActive(nav.path)
											? "menu-item-icon-active"
											: "menu-item-icon-inactive"
									}`}
								>
									{nav.icon}
								</span>
								{(isExpanded || isHovered || isMobileOpen) && (
									<span className="menu-item-text">{nav.name}</span>
								)}
							</Link>
						)
					)}
					{nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
						<div
							ref={(el) => (subMenuRefs.current[`${menuType}-${index}`] = el)}
							className="overflow-hidden transition-all duration-300"
							style={{
								height:
									openSubmenu?.type === menuType && openSubmenu?.index === index
										? `${subMenuHeight[`${menuType}-${index}`]}px`
										: "0px",
							}}
						>
							<ul className="mt-2 space-y-1 ml-9">
								{nav.subItems.map((subItem) => (
									<li key={subItem.name}>
										<Link
											to={subItem.path}
											className={`menu-dropdown-item ${
												isActive(subItem.path)
													? "menu-dropdown-item-active"
													: "menu-dropdown-item-inactive"
											}`}
										>
											{subItem.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</li>
			))}
		</ul>
	);

	return (
		<aside
			className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
					isExpanded || isMobileOpen
						? "w-[290px]"
						: isHovered
						? "w-[290px]"
						: "w-[90px]"
				} ${
				isMobileOpen ? "translate-x-0" : "-translate-x-full"
			} lg:translate-x-0`}
			onMouseEnter={() => !isExpanded && setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="py-8 flex justify-start">
				<Link to="/admin">
					<img
						src="/images/logo/logo.svg"
						alt="Logo"
						width={150}
						height={40}
						className="dark:hidden"
					/>
					<img
						src="/images/logo/logo-dark.svg"
						alt="Logo"
						width={150}
						height={40}
						className="hidden dark:block"
					/>
				</Link>
			</div>
			<div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
				<nav className="mb-6">{renderMenuItems(navItems, "main")}</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
