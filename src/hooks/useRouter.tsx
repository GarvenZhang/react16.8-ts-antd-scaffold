import * as React from 'react';
import { createContext } from 'react';
import * as URI from 'urijs';
import { History, createHashHistory, createBrowserHistory } from 'history';
import omit from 'omit.js';

export type RouterType = 'hash' | 'browser';
export type SearchAction = 'merge' | 'replace';

export interface Params {
  type?: RouterType;
  searchAction?: SearchAction;
  hash?: string;
  pathname?: string;
  search?: { [key: string]: string | number };
  state?: any;
  target?: '_blank';
}

const defaultType = 'hash';
const defaultSearchType = 'merge';

export class RouterManagement {
  history: History;
  go: (arg: Params) => void;
  constructor(type: RouterType) {
    switch (type) {
      case 'hash':
        this.history = createHashHistory();
        this.go = this.hashGo;
        break;
      case 'browser':
        this.history = createBrowserHistory();
        break;
    }
  }

  get routes() {
    const { pathname, search } = this.history.location;
    return {
      pathname,
      search: URI.parseQuery(search),
    };
  }

  hashGo = ({ hash, pathname, search, state, searchAction = defaultSearchType, target }: Params): void => {
    // 去掉 #
    const fakeUrl = `${window.location.origin}${window.location.hash.slice(1)}`;
    let uri = URI(fakeUrl);

    if (search !== undefined) {
      if (searchAction === 'replace') {
        uri.search(search!);
      } else if (searchAction === 'merge') {
        uri.setSearch(search!);
      }
    }

    if (pathname !== undefined) {
      uri.pathname(pathname);
    }

    const realUrl = uri.resource();

    if (target === '_blank') {
      window.open(`${window.location.origin}/#/${realUrl}`);
      return;
    }

    this.history.push(realUrl);
  };

  browserGo = () => {};
}

export const go = (arg: Params) => {
  const routerManaqement = new RouterManagement(arg.type || defaultType);
  return routerManaqement.go(omit(arg, ['type']));
};

export const getUrlObj = (arg?: Params) => {
  const routerManaqement = new RouterManagement((arg && arg.type) || defaultType);
  return routerManaqement.routes;
};

export interface ParseUrlParams {
  hash?: string;
  pathname?: string;
  search?: string;
}

export const parseUrl = ({ search }: ParseUrlParams) => {
  const result: Params = {};
  if (search) {
    result.search = URI.parseQuery(search);
  }
  return result;
};

export const RouterContext = createContext<IRouterContextValue>({ router: { search: {}, pathname: '' }, setRouter: go });

interface Props {
  type?: Params['type'];
  children: React.ReactChild;
}

export interface IRouterContextValue {
  router: { pathname: string; search: { [key: string]: string } };
  setRouter: typeof go;
}

export const RouterProvider = ({ type, children }: Props) => {
  const routerManaqement = new RouterManagement(type || defaultType);
  const value: IRouterContextValue = {
    setRouter(arg: Params) {
      routerManaqement.go(omit(arg, ['type']));
    },
  } as IRouterContextValue;
  Object.defineProperty(value, 'router', {
    get() {
      return routerManaqement.routes;
    },
  });

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};
