// import { CommonToast } from '@/components/common';
// import { localStorageKey } from '@/constants';
// import { useTranslation } from '@/context/TranslationProvider';
import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

const apiConfig = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
};

const instance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: 'application/json',
  },
  timeout: 30000, // 30 seconds
});

const urlExceptAuthorization = ['Authenticate'];

const authorization = async () => {
  const token = cookies().get('access_token');
  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
};

const getUrl = (config: any) => {
  if (config?.baseURL) {
    return config?.url.replace(config?.baseURL, '');
  }
  return config?.url;
};

// Intercept all request
instance.interceptors.request.use(
  async (config: any) => {
    const url = getUrl(config);

    if (!urlExceptAuthorization.includes(url)) {
      const authHeader = await authorization();

      config.headers = {
        ...config.headers,
        ...authHeader,
      } as any;
    }
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `%c Request: ${config?.method?.toUpperCase()} - ${getUrl(config)}:`,
        'color: #0086b3; font-weight: bold',
        config,
      );
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Intercept all responses
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `%c Response: ${response?.status} - ${getUrl(response?.config)}:`,
        'color: #008000; font-weight: bold',
        response,
      );
    }

    return response;
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error?.response) {
        console.log('====== Server Error =====');
      } else if (error?.request) {
        console.log('====== Timeout =====');
      } else {
        console.log('====== Internal Server Error! =====');
      }
    }
    // CommonToast.error({
    //   key: 'error-axios',
    //   icon: <img src="/icon/warning.svg" />,
    //   message: `${error?.response?.status} - ${
    //     error?.response?.data?.message
    //       ? error.response.data.message
    //       : error?.response?.data?.msg
    //       ? error?.response?.data?.msg
    //       : error?.response?.data?.error
    //       ? error?.response?.data?.error
    //       : error.response.status === 401
    //       ? 'Unauthorization! Please login to continue'
    //       : error?.response?.status === 700
    //       ? 'This account has been limited'
    //       : 'Internal Server Error!'
    //   }`,
    //   // description: error?.response?.data?.message,
    //   placement: 'bottomRight',
    // });

    // console.log(
    //   `%c ${error?.response?.status} - ${getUrl(error?.response?.config)}:`,
    //   'color: #a71d5d; font-weight: bold',
    //   error?.response,
    // )
    return Promise.reject(error);
  },
);

export default instance;
