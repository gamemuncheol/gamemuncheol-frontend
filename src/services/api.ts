import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const getToken = () => localStorage.getItem('accessToken');
const setToken = (token: string) => localStorage.setItem('accessToken', token);
const getRefreshToken = () => localStorage.getItem('refreshToken');

// 요청 interceptor
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;
