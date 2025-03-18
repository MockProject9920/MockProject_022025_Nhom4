/* Configure the base URL of the API */
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/* Configure Axios instance */
const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: true, // Support cookies if needed
});

export default api;
