import { post, get, del } from '@/fetch/method';
import { AddGoodsRequestData, DeleteRelativeGoodsRequestData } from '../types';

// goods相关
export const get_goods_list = ({ pageNum, pageSize }: PageConfig) => get(`/api/goods?pageNum=${pageNum}&pageSize=${pageSize}`);
export const add_goods = (data: AddGoodsRequestData) => post(`/api/goods`, data);

// relative_goods相关
export const get_relative_goods_list = ({ pageNum, pageSize }: PageConfig) =>
  get(`/api/relative_goods?pageNum=${pageNum}&pageSize=${pageSize}`);
export const delete_relative_goods = ({ id }: DeleteRelativeGoodsRequestData) => del(`/api/relative_goods?id=${id}`);
