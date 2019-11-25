const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = Object.assign(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    ...baseConfig.plugins,
    // 构建前清除dist文件夹中的内容
    new CleanWebpackPlugin(),
    // 压缩css
    new OptimizeCSSAssetsPlugin(),
    // gzip
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          // node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors', // chunks name
          priority: 10, // 优先级
          enforce: true,
        },
        main: {
          name: 'main',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      },
    },
  },
});
