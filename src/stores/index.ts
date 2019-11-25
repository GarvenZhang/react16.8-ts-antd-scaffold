import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// 中间件处理
const middlewares = [thunk];
let storeEnhancers = compose(applyMiddleware(...middlewares));

// 劫持rootReducer
const appReducer = (state: any, action: any) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return rootReducer(state, action);
};

// 创建store
export function configureStore(initialState = {}) {
  const store = createStore(appReducer, initialState, storeEnhancers);

  return store;
}
export let store = configureStore();
