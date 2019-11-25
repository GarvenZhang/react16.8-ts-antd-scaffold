import { urlHandle, configHandle, axios } from './axios';
import { requestStart, requestEnd } from '@/utils/showLoadingTips';

export const get = <T = any>(url: string, customConfig?: any): Promise<CommonResponseData<T>> => {
  return new Promise((resolve, reject) => {
    requestStart();
    axios
      .get<any, CommonResponseData<T>>(urlHandle(url), configHandle(customConfig))
      .then((result: CommonResponseData<T>) => resolve(result))
      .catch((err) => reject(err))
      .finally(() => requestEnd());
  });
};

export const post = <B = object, T = any>(url: string, data: B, customConfig?: any): Promise<CommonResponseData<T>> => {
  return new Promise((resolve, reject) => {
    requestStart();
    axios
      .post<any, CommonResponseData<T>>(urlHandle(url), data, configHandle(customConfig))
      .then((result: CommonResponseData<T>) => resolve(result))
      .catch((err) => reject(err))
      .finally(() => requestEnd());
  });
};
