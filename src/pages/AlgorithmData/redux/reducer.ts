import { initialState, State } from './initialState';
import * as actionTypes from './actionTypes';

export const reducer = (state: State = initialState, { type, value }: { type: actionTypes.ActionTypes; value: any }): State => {
  switch (type) {
    case actionTypes.GET_GOODS_LIST:
      return { ...state, goodsListInfo: value.goodsListInfo };
    default:
      return state;
  }
};
