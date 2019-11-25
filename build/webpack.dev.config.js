const baseConfig = require('./webpack.base.config.js');

module.exports = {
  ...baseConfig,
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {
          from: /^\//,
          to: (ctx) => {
            return '/index.html';
          },
        },
      ],
    },
    hot: true,
    // contentBase: outputDirPath, // since we use CopyWebpackPlugin.
    compress: true,
    host: '',
    port: 8084,
    open: true,
    // openPage: '?token=token=1E70F11C3EE743A6A49E53ECA1DAF21C',
    publicPath: '/',
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {},
    overlay: true,
  },
};
