// filepath: /MockProject_022025_Nhom4/frontend/src/services/authService.js

import axios from 'axios';
import { API_URL } from '../utils/constants';

const authService = {
    register: async (userData) => {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    },

    login: async (userData) => {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },

    setUser: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

export default authService;