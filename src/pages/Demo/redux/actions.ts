import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';
import { get_goods_list, add_goods, get_relative_goods_list, delete_relative_goods } from '../fetch/api';
import { GoodsItem, AddGoodsRequestData, DeleteRelativeGoodsRequestData, GetRelativeGoodsRequestData } from '../types';

// 获取商品列表
export const getGoodsList: (data: PageConfig, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (dispatch: Dispatch) => {
  const { data: goodsList }: CommonResponseData<GoodsItem[]> = await get_goods_list(data);
  dispatch({
    type: actionTypes.GET_GOODS_LIST,
    value: { goodsList },
  });
  cb && cb();
};

// 增加商品
export const addGoods: (data: AddGoodsRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (dispatch: Dispatch) => {
  await add_goods(data);
  cb && cb();
};

// 获取相关商品列表
export const getRelativeGoods: (data: GetRelativeGoodsRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (
  dispatch: Dispatch,
) => {
  const { data: relativeGoods }: CommonResponseData<GoodsItem[]> = await get_relative_goods_list(data);
  dispatch({
    type: actionTypes.GET_RELATIVE_GOODS_LIST,
    value: { relativeGoods },
  });
  cb && cb();
};

// 删除相关商品
export const deleteRelativeGoods: (data: DeleteRelativeGoodsRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (
  dispatch: Dispatch,
) => {
  await delete_relative_goods(data);
  cb && cb();
};
