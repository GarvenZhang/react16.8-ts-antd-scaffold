import * as React from 'react';
import { useContext } from 'react';
import { Result, Button } from 'antd';
import { IRouterContextValue, RouterContext } from '@/hooks/useRouter';

interface Props {}

export const Error: React.FC<Props> = ({}) => {
  const { setRouter } = useContext<IRouterContextValue>(RouterContext);

  const goBack = () => {
    setRouter({ pathname: '/' });
    location.reload();
  };

  return (
    <div className="error-page">
      <Result
        status="warning"
        title="抱歉，程序出错啦，请反馈给管理员~"
        extra={
          <Button type="primary" key="console" onClick={goBack}>
            返回首页
          </Button>
        }
      />
    </div>
  );
};
