import * as React from 'react';
import { ComponentType, lazy } from 'react';
import { RouteProps, Redirect } from 'react-router-dom';

/**
 * 全局router配置
 */
export const RouteMap: RouteProps[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={{ pathname: '/parameter-combination', search: '' }} />,
  },
  {
    path: '/algorithm-data-configuration',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "AlgorithmData" */ '../pages/AlgorithmData')),
  },
  {
    path: '/algorithm-service-configuration',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "AlgorithmService" */ '../pages/AlgorithmService')),
  },
  {
    path: '/strategy-configuration-item',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "StrategyItem" */ '../pages/StrategyItem')),
  },
  {
    path: '/parameter-configuration',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "ParameterConfiguration" */ '../pages/ParameterConfiguration')),
  },
  {
    path: '/parameter-combination',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "ParameterCombination" */ '../pages/ParameterCombination')),
  },
  {
    path: '/combined-parameter-application',
    exact: true,
    component: lazy<ComponentType>(() => import(/* webpackChunkName: "ParameterApplication" */ '../pages/ParameterApplication')),
  },
];
