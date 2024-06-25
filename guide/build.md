# Build and Deploy

## Build Project

```bash
npm run build
```

## Deploy and Start

Here, deployment and hosting use pm2. First, you need to install pm2 globally.

```bash
npm install pm2@latest -g
```

Then start the service

```bash
pm2 start ecosystem.config.js
```

You can modify `ecosystem.config.js` to meet your needs

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