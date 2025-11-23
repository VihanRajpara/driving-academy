import axios from "axios";

const api = axios.create({
  baseURL: "https://driving-academy.onrender.com",   // ← your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Change header key if your backend expects something else
      config.headers['Authorization'] = `Vihan ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
