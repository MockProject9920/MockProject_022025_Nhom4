/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	/* Cấu hình Proxy (Nếu Gặp CORS Error) */
	server: {
		proxy: {
			"/api": {
				target: process.env.VITE_API_BASE_URL,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
