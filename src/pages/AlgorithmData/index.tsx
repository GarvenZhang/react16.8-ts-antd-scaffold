import * as React from 'react';
import {} from 'react';
import { connect } from 'react-redux';
import { AppState } from '@/stores/types';

import './index.scss';

interface Props {}
const AlgorithmData: React.FC<Props> = ({}) => {
  return <div className="">算法数据配置</div>;
};

export default connect(({}: AppState) => ({}), {})(AlgorithmData);
