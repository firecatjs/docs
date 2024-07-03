# pm2 deployment

## Package project

```bash
npm run build
```

The packaged project is a complete project, with the same directory structure as src in the `dist` directory. You can put the dist directory where you want, such as on a server, and run it after installing dependencies according to `package.json`.

## Deployment and startup

Here we use `pm2` for deployment hosting. First, you need to install pm2 globally

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