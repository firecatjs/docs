# pm2部署

## 打包项目

```bash
npm run build
```

打包出来的项目，是一个完整的项目，在`dist`目录拥有跟 src 一样的目录结构，你可以把 dist 目录放到你想要的地方，例如服务器上，根据 `package.json` 安装依赖后运行。

## 部署启动

这里部署托管是用的 `pm2`，首先你需要全局安装 pm2

```bash
npm install pm2@latest -g
```

然后启动服务

```bash
pm2 start ecosystem.config.js
```

你可以修改 `ecosystem.config.js` 来满足你的需求

```js
const { name } = require('./package.json');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './app/index.js'),
      instances: 1 || require('os').cpus().length,
      autorestart: true,
      // watch: true,
      env_production: {
        NODE_ENV: 'prod',
      }
    }
  ]
};
```