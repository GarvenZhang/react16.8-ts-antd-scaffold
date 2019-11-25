const argv = require('yargs').argv;

// 默认配置项
const defaultConfig = {
  hostname: '',
  port: 8081,
  apiHostname: '',
  env: argv.env,
  signRedirect: 'http://ulp-test01.sheincorp.cn/#/login',
  tokenName: 'datasourceMap',
};

// 环境配置项
let extraConfig = null;
switch (argv.env) {
  case 'dev':
    extraConfig = require('./dev');
    break;
  case 'test':
    extraConfig = require('./test');
    break;
  case 'prod':
    extraConfig = require('./prod');
    break;
}

module.exports = {
  ...defaultConfig,
  ...extraConfig,
};
