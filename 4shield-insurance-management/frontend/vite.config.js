/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "node:path"; // VS Code sẽ tự động gợi ý
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react(), tailwindcss(), svgr()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Sử dụng @ để trỏ đến thư mục src
			"@components": path.resolve(__dirname, "./src/components"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@common": path.resolve(__dirname, "./src/common"),
		},
		server: {
			port: parseInt(process.env.VITE_PORT) || 5173,
		},
	},
});
