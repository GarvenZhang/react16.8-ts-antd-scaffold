import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stores';
import { Main } from './layouts';

import './assets/styles/reset.scss';
import 'antd/dist/antd.css';
import './index.scss';

// mock
// if (__ENV__ === 'dev') {
//   import('./mock');
// }

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#app') as HTMLElement,
);
