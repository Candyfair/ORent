import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://orent-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (res) =>
    // console.log(`je suis dans l'interceptor`)
    res,
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== '/refresh-token' && err.response.status === 401 && originalConfig._retry !== true) {
      // Access Token was expired
      originalConfig._retry = true;
      const refreshToken = localStorage.getItem('userRefreshToken');
      // console.log('refreshToken :', refreshToken);
      if (refreshToken) {
        instance.defaults.headers.common.authorization = `Bearer ${refreshToken}`;
        await instance.post('/refresh-token').then((response) => {
          // console.log('response refresh-token interceptor', response)
          instance.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
          originalConfig.headers.authorization = `Bearer ${response.data.accessToken}`;
        }).catch((error) => {
          console.log('response', error.response.status);
          localStorage.removeItem('userRefreshToken');
        });
        return instance(originalConfig);
      }
    }
  },
);

export default instance;
