import * as actionTypes from './actionTypes';
import { Dispatch } from 'redux';
import { get_goods_list } from '../fetch/api';
import { UploadImgRequestData, GoodsListInfo } from '../types.d';

export const getGoodsList: (data: UploadImgRequestData, cb?: NoParamsNoReturnValueFn) => void = (data, cb) => async (
  dispatch: Dispatch,
) => {
  const { data: goodsListInfo }: CommonResponseData<GoodsListInfo> = await upload_img(data);
  dispatch({
    type: actionTypes.GET_GOODS_LIST,
    value: { goodsListInfo },
  });
  cb && cb();
};
