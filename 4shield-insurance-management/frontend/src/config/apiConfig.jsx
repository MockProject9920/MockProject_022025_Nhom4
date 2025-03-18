import api from "../api/api";

/* Process before sending request to server */
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/* Process after receiving response from server */
api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (error.response) {
			console.error("API Error:", error.response.data);
			if (error.response.status === 401) {
				/* Handle when token expires, can logout user */
				localStorage.removeItem("accessToken");
				window.location.href = "/login";
			}
		}
		return Promise.reject(error);
	}
);

export default api;
