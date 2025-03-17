import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "@contexts/ThemeContext";
import { AppWrapper } from "@common/PageMeta";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<AppWrapper>
				<App />
			</AppWrapper>
		</ThemeProvider>
	</StrictMode>
);
