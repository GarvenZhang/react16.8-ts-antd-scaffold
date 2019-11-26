import { GoodsListInfo } from '../types.d';

export interface State {
  goodsListInfo: GoodsListInfo | AnyObject;
}

export const initialState: State = {
  goodsListInfo: {},
};
