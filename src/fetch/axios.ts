import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { tips, showError } from '../config/tips';

export const axios = Axios.create({});

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 204) {
      return;
    }
    const { data, request, msg } = res.data;
    if (request) {
      showError(msg);
      return Promise.reject(msg);
    }
    if (data) {
      return res.data;
    }
  },
  (err) => {
    if (err.message.indexOf('Network Error') > -1) {
      showError(tips.network.fail);
    } else if (err.message.indexOf('Timeout Error') > -1) {
      showError(tips.network.timeout);
    }
    return Promise.reject(err);
  },
);

// 默认配置
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
    // 'token': '3309_267baf50c44d40a9bea9124753cbeed4'
  },
  // withCredentials: true,
  timeout: 90 * 1e3,
  responseType: 'json',
  validateStatus(status: any) {
    if (status === 403) {
      localStorage.removeItem('datasourceMap');
      return false;
    }
    return true;
  },
};

export function configHandle(customConfig: any = {}): AxiosRequestConfig {
  const _config = {
    headers: { Token: '' },
    Authorization: '',
  };

  if (customConfig.token) {
    _config.Authorization = 'Token ' + customConfig.token;
    _config.headers['Token'] = customConfig.token;
  }

  return {
    ...defaultConfig,
    ..._config,
  } as AxiosRequestConfig;
}

export const urlHandle = (url: string) => {
  if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
    return __SYSCONFIG__.apiHostname + url;
  }
  return url;
};
