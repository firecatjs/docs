# 打包部署

## 打包项目

```bash
npm run build
```

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

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './dist/index.js'),
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