const webpack = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { entryFilePath, outputDirPath, tmplHtmlPath, srcRootPath, faviconPath } = require('./const');
const sysConfig = require('./config');
const plusQuot = require('./utils/plusQuot');
const argv = require('yargs').argv;

// css分离
const commonCss = new MiniCssExtractPlugin({
  filename: 'styles/index-[hash].css',
  disable: false,
  allChunks: true,
});

module.exports = {
  entry: ['@babel/polyfill', entryFilePath],
  output: {
    path: outputDirPath,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.json', '.ts', '.tsx', '.js'],
    alias: {
      '@': srcRootPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/, // 指定转译时忽略的文件夹
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: 'imgs/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // html处理
    new HtmlWepackPlugin({
      template: tmplHtmlPath,
      filename: 'index.html',
      favicon: faviconPath,
      minify: {
        removeComment: true,
        collapseWhitespage: true,
      },
    }),

    // 提取css
    commonCss,

    new webpack.HotModuleReplacementPlugin(),

    // 定义全局常量
    new webpack.DefinePlugin({
      __ENV__: `'${argv.env}'`, // dev | test | prod
      __SYSCONFIG__: plusQuot({
        ...sysConfig,
      }),
    }),
  ],
};
