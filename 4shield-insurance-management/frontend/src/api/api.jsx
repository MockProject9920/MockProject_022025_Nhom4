/* Configure the base URL of the API */
import axios from "axios";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/* Configure Axios instance */
const api = axios.create({
	baseURL: VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: false, // Support cookies if needed
});

export default api;
