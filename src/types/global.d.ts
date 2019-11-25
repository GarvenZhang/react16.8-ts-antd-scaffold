declare const __ENV__: string;
declare const __SYSCONFIG__: any;

declare interface CommonResponseData<T> {
  code: number;
  data: T;
  msg: string;
}

declare interface CommonResponseErrorData {
  code: number;
  msg: string;
  request: string;
  status?: number;
}

declare interface DispatchParams<Type, Value> {
  type: Type;
  value: Value;
}

declare interface PageConfig {
  pageSize: number | string;
  pageNO: number | string;
}

declare type NoParamsNoReturnValueFn = () => void;
declare type ErrorReturnValueFn = (err?: any) => void;
declare interface AnyObject {
  [propName: string]: any;
}
