import * as React from 'react';
import { Layout } from 'antd';
import { Route, Switch, RouteProps, HashRouter } from 'react-router-dom';
import { RouteMap } from '@/config/routes';
import { Loading } from '@/components/Loading';
import { RouterProvider } from '@/hooks/useRouter';
import { Navigator } from './components/Navigator';

import './index.scss';

interface Props {}

export const Main = ({}: Props) => {
  return (
    <RouterProvider>
      <HashRouter>
        <Layout className="layout-wrap">
          <Layout.Sider>
            <Navigator />
          </Layout.Sider>
          <Layout.Content>
            <React.Suspense fallback={<Loading />}>
              <Switch>
                {RouteMap.map((props: RouteProps) => {
                  return <Route {...props} />;
                })}
              </Switch>
            </React.Suspense>
          </Layout.Content>
        </Layout>
      </HashRouter>
    </RouterProvider>
  );
};
