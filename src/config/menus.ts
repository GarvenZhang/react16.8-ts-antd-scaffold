import { IMenuItem, IMenuContainer } from '@/layouts/types.d';

/**
 * 导航栏配置表
 */
export const menuList: Array<IMenuItem | IMenuContainer> = [
  {
    pathname: '/algorithm-data-configuration',
    name: '算法数据配置',
    menus: [],
    search: '',
  },
  {
    pathname: '/algorithm-service-configuration',
    name: '算法服务配置',
    menus: [],
    search: '',
  },
  {
    pathname: '/strategy-configuration-item',
    name: '策略配置项',
    menus: [],
    search: '',
  },
  {
    pathname: '/parameter-configuration',
    name: '参数配置',
    menus: [],
  },
  {
    pathname: '/parameter-combination',
    name: '参数组合',
    search: '',
    menus: [],
  },
  {
    pathname: '/combined-parameter-application',
    name: '组合参数应用',
    search: '',
    menus: [],
  },
];
