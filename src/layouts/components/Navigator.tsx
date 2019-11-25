import * as React from 'react';
import { useContext } from 'react';
import { Menu, Icon } from 'antd';
import { RouterContext } from '@/hooks/useRouter';
import { IMenuContainer, IMenuItem } from '../types';
import { Link } from 'react-router-dom';
import { menuList } from '@/config/menus';

interface Props {}

/**
 * 递归构建菜单
 * @param menus 菜单数组
 * @param level 菜单层级
 */
const loop = (menus: Array<IMenuItem | IMenuContainer>, level: number): any => {
  return menus.map((menuItem: IMenuItem | IMenuContainer) => {
    // 子菜单
    if (menuItem.menus.length === 0) {
      const { pathname, search, name, iconType } = menuItem as IMenuItem;
      return (
        <Menu.Item key={pathname}>
          <Link style={{ display: 'block' }} to={{ pathname, search }}>
            {level === 1 && iconType && <Icon type={iconType} />}
            {name}
          </Link>
        </Menu.Item>
      );
    }

    // 子菜单包裹层
    const { menus, name, iconType } = menuItem as IMenuContainer;
    return (
      <Menu.SubMenu
        title={
          <>
            <Icon type={iconType} />
            {name}
          </>
        }
      >
        {loop(menus, level + 1)}
      </Menu.SubMenu>
    );
  });
};

export const Navigator = ({}: Props) => {
  const {
    router: { pathname },
  } = useContext(RouterContext);

  return (
    <div className="sidebar-wrap">
      <Menu defaultSelectedKeys={[pathname]}>{loop(menuList, 1)}</Menu>
    </div>
  );
};
