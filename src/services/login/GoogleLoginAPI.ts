import api from '../api';

const GoogleLoginAPI = async () => {
  try {
    const response = await api.get(
      `/oauth2/authorization/google?redirect_uri=http://localhost:3000/login&mode=login`,
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default GoogleLoginAPI;
