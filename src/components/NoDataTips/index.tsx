import * as React from 'react';

import './index.scss';

interface Props {}
export const NoDataTips: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div className="nodata-tips" style={{ textAlign: 'center', width: '100%' }}>
      暂无数据～
    </div>
  );
};
