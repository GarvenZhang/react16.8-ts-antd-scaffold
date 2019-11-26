import { GoodsItem, RelativeGoodsItem } from '../types';

export interface State {
  goodsList: GoodsItem[];
  relativeGoods: RelativeGoodsItem[];
}

export const initialState: State = {
  goodsList: [],
  relativeGoods: [],
};
