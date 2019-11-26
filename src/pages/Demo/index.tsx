import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '@/stores/types';
import { addGoods, getGoodsList, getRelativeGoods, deleteRelativeGoods } from './redux/actions';
import { GoodsItem, RelativeGoodsItem } from './types';
import { Button } from 'antd';

import './index.scss';

interface Props {
  goodsList: GoodsItem[];
  relativeGoods: RelativeGoodsItem[];
  addGoods: typeof addGoods;
  getGoodsList: typeof getGoodsList;
  getRelativeGoods: typeof getRelativeGoods;
  deleteRelativeGoods: typeof deleteRelativeGoods;
}

interface State {
  curGoodsItem: GoodsItem | null;
}

const Demo: React.FC<Props> = ({ deleteRelativeGoods, relativeGoods, getGoodsList, getRelativeGoods, goodsList }) => {
  const [curGoodsItem, setCurGoodsItem] = useState<State['curGoodsItem']>(null);

  // 获取商品列表
  useEffect(() => {
    getGoodsList({ pageNum: 10, pageSize: 1 });
  }, []);

  // 获取相关商品
  useEffect(() => {
    if (!curGoodsItem) {
      return;
    }
    getRelativeGoods({ id: curGoodsItem.id, pageSize: 10, pageNum: 1 });
  });

  return (
    <div className="demo-page">
      <div className="goods-list">
        {goodsList.map((item: GoodsItem) => {
          const { id, name, desc, price } = item;
          return (
            <div className="goods-item">
              <Button className="btn btn--check" onClick={() => setCurGoodsItem(item)}>
                查看相关商品
              </Button>
              <span className="text">{id}</span>
              <span className="text">{name}</span>
              <span className="text">{desc}</span>
              <span className="text">{price}</span>
            </div>
          );
        })}
      </div>
      <div className="relative-goods-list">
        {relativeGoods.map(({ id, name, price }: RelativeGoodsItem) => (
          <div className="relative-goods-item">
            <Button className="btn btn--delete" onClick={() => deleteRelativeGoods({ id })}>
              删除该商品
            </Button>
            <span className="text">{id}</span>
            <span className="text">{name}</span>
            <span className="text">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(({ DemoReducer: { goodsList, relativeGoods } }: AppState) => ({ goodsList, relativeGoods }), {
  addGoods,
  getGoodsList,
  getRelativeGoods,
  deleteRelativeGoods,
})(Demo);
