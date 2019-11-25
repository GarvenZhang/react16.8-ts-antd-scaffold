import * as React from 'react';
import { useContext } from 'react';
import { Button, Result } from 'antd';
import { IRouterContextValue, RouterContext } from '@/hooks/useRouter';

interface Props {}
const NotFound: React.FC<Props> = ({}) => {
  const { setRouter } = useContext<IRouterContextValue>(RouterContext);

  const backToIndexPage = () => {
    setRouter({ pathname: '/' });
  };

  return (
    <div className="not-found-page">
      <Result
        status="404"
        title="404"
        subTitle="你所访问的页面不存在~"
        extra={
          <Button type="primary" onClick={backToIndexPage}>
            回到首页
          </Button>
        }
      ></Result>
    </div>
  );
};

export default NotFound;
