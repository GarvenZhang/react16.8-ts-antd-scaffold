const path = require('path');

const rootPath = process.cwd();

module.exports = {
  // 路径
  srcRootPath: path.resolve(rootPath, './src/'),
  entryFilePath: path.resolve(rootPath, './src/index.tsx'),
  outputDirPath: path.resolve(rootPath, './dist'),
  tmplHtmlPath: path.resolve(rootPath, './public/index.html'),
  faviconPath: path.resolve(rootPath, './public/favicon.ico'),
  imgsOriginDirPath: path.resolve(rootPath, './src/assets/imgs'),
  imgsOutputDirPath: path.resolve(rootPath, './dist/imgs'),
};
