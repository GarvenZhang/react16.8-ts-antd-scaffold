# react16.8-ts-antd-scaffold

## 使用

- `env`: `dev` | `test` | `prod`

```npm

// 开发环境
npm run server [env]

// 构建
npm run build [env]

```

---

## 项目目录结构

```
.
├── .babelrc
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── build   // webpack配置
│   ├── config  // 各环境配置
│   │   ├── dev.js
│   │   ├── index.js
│   │   ├── prod.js
│   │   └── test.js
│   ├── const.js
│   ├── utils
│   │   └── plusQuot.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── package-lock.json
├── package.json
├── public  // html和ico
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets // 静态资源，如样式文件、媒体文件、图片文件等
│   │   ├── variable.scss // scss公用变量
│   │   └── reset.scss  // 重置样式
│   ├── components  // 公用组件
│   │   ├── Loading
│   │   │   ├── index.scss
│   │   │   └── index.tsx
│   │   └── NoDataTips
│   │       ├── index.scss
│   │       └── index.tsx
│   ├── config  // 程序配置文件
│   │   ├── form.ts   // 表单相关配置
│   │   ├── menus.ts  // 菜单配置
│   │   ├── routes.tsx  // 路由配置
│   │   ├── tips.ts   // 提示性言语配置
│   │   └── validate.ts   // 验证相关提示配置
│   ├── fetch   // axios配置
│   │   ├── axios.ts
│   │   └── method.ts   // 请求方法集成
│   ├── hooks   // react hooks
│   │   └── useRouter.tsx
│   ├── index.scss
│   ├── index.tsx   // 入口文件
│   ├── layouts   // 布局层
│   │   ├── components
│   │   │   └── Navigator.tsx
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   └── types.d.ts  // 局部ts声明文件
│   ├── manifest.json
│   ├── mock  // mock数据
│   │   └── index.ts
│   ├── pages   // 页面
│   │   ├── Demo  // 示例
│   │   │   ├── components  // 页面组件
│   │   │   ├── fetch // api层
│   │   │   │   └── api.ts
│   │   │   ├── index.scss  // 页面样式
│   │   │   ├── index.tsx   // 页面入口
│   │   │   ├── redux   // redux相关
│   │   │   │   ├── actionTypes.ts
│   │   │   │   ├── actions.ts
│   │   │   │   ├── initialState.ts
│   │   │   │   └── reducer.ts
│   │   │   └── types.d.ts  // 局部ts声明文件
│   │   ├── Exception   // 异常页面
│   │   │   ├── 403.tsx
│   │   │   ├── 404.tsx
│   │   │   ├── 5xx.tsx
│   │   │   └── Error.tsx
│   │   └── StrategyItem
│   │       ├── components
│   │       ├── fetch
│   │       ├── index.scss
│   │       ├── index.tsx
│   │       ├── redux
│   │       └── types.d.ts
│   ├── service-worker.js
│   ├── stores   // redux全局性配置
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── types.d.ts
│   ├── types   // ts全局声明文件
│   │   ├── global.d.ts   // 全局声明
│   │   ├── images.d.ts   // 图片后缀支持
│   │   └── lib.d.ts  // 第三方库ts修复
│   └── utils   // 工具函数
│       ├── fetchImage.ts
│       ├── object.ts
│       ├── showLoadingTips.ts  // 展示loading提示
│       ├── type.ts
│       └── ua.js
├── test
├── tsconfig.json
└── tslint.json
```
