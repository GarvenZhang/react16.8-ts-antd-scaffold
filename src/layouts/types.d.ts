interface IMenuCommon {
  name: string;
  search?: string;
  iconType?: string;
}

export interface IMenuItem extends IMenuCommon {
  pathname: string;
  menus: never[];
}

export interface IMenuContainer extends IMenuCommon {
  menus: IMenuItem[];
}
