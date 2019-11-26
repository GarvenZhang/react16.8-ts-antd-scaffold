export interface GoodsItem {
  id: number;
  name: string;
  price: number;
  desc: string;
  quantity: number;
}

export interface AddGoodsRequestData {
  name: string;
  price: number;
}

export interface RelativeGoodsItem {
  id: number;
  name: string;
  price: number;
}

export interface GetRelativeGoodsRequestData extends PageConfig {
  id: number;
}

export interface DeleteRelativeGoodsRequestData {
  id: number;
}
