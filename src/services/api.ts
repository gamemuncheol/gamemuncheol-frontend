import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const getToken = () => localStorage.getItem('accessToken');
const getRefreshToken = () => localStorage.getItem('refreshToken');

// 요청 interceptor
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// 응답 interceptor
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
        const rToken = getRefreshToken();
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/open-api/member/renew`,
          {
            refreshToken: rToken,
          },
        );
        const { accessToken, refreshToken } = res.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // 원래 요청 다시 시도
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest); // 원래 요청 다시 시도
      } catch (refreshError) {
        console.error('Unable to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
