import axios from 'axios';
import { useCookies } from 'react-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 요청 interceptor
api.interceptors.request.use((config) => {
  const accesstoken = localStorage.getItem('accessToken');
  if (accesstoken && config.url && !config.url.startsWith('/open-api')) {
    config.headers['Authorization'] = `Bearer ${accesstoken}`;
  }
  return config;
});

// 응답 interceptor
const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const statusCode = error.response?.status;
    const originalRequest = error.config; // 원래요청
    if (statusCode === 401 && !originalRequest._retry) {
      try {
        // refresh token으로 new access token 요청하기

        const rToken = cookies.refreshToken;
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/open-api/member/renew`, {
          refreshToken: rToken,
        });
        const { accessToken, refreshToken } = res.data.data;
        localStorage.setItem('accessToken', accessToken);
        setCookie(refreshToken, 'refreshToken');

        // 원래 요청 다시 시도
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Unable to refresh token:', refreshError);
        removeCookie('refreshToken');
        localStorage.removeItem('accessToken');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
