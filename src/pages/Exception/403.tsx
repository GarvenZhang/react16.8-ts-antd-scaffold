import * as React from 'react';
import { Button, Result } from 'antd';

interface Props {}
const NotFound: React.FC<Props> = ({}) => {
  return (
    <div className="not-found-page">
      <Result
        status="403"
        title="403"
        subTitle="抱歉，您无权访问~"
        extra={
          <Button type="primary" onClick={() => {}}>
            重新登录
          </Button>
        }
      ></Result>
    </div>
  );
};

export default NotFound;
