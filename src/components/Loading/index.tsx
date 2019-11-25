import * as React from 'react';

import './index.scss';

interface Props {}
export const Loading: React.FC<Props> = ({}) => {
  return (
    <div className="loading-area">
      <div className="point-loading">
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
      </div>
    </div>
  );
};
