// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/frontend/src/services/api.js

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // Default to localhost if not set
});

export default api;