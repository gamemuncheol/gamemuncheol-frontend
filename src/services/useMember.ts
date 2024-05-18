// 이후 react-query 적용 예정

import api from './api';

const isAgreedAPI = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await api.get(`/privacy/is-agreed`);
    console.log('API', response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default isAgreedAPI;
