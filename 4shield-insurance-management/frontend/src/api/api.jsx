/* Configure the base URL of the API */
import axios from "axios";

/* Configure Axios instance */
const api = axios.create({
	baseURL: "http://localhost:8080", // Change URL if needed
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: true, // Support cookies if needed
});

export default api;
