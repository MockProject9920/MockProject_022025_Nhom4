// Quản lý theme (dark/light mode)
"use client";

import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const initialTheme = savedTheme || "light"; // Default to light theme

		setTheme(initialTheme);
		setIsInitialized(true);
	}, []);

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem("theme", theme);
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, [theme, isInitialized]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme };
