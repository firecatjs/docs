# Configuration

## Configuration file directory structure

```
└── config
   ├── fire-env.ts
   ├── config.dev.ts
   ├── config.prod.ts
   ├── env.ts
   └── index.ts
```

## Default configuration file
The project has two default configuration files, namely `config.dev.ts` and `config.prod.ts`, which correspond to the development environment and the online environment. You can customize your configuration in them, and then export it in the `index.ts` file for use in other places where it is needed.

## About env file

The content of the `xx.env` file is to specify the entry of a configuration file, so that the application knows which configuration file we should use. The content of the env file is `APP_ENV=xxx` to specify which environment is currently.

## Customize your configuration file

#### 1. Create a new file
Create your configuration file in the `/config` folder, such as `config.test.ts`, and then configure the content of the file:

`config.test.ts`

```ts
export default {
  foo: 'test',
  port: 3000,
}
```

#### 2. Configure the startup entry
First, create your configuration file in the root directory, such as `test.env`

```env
APP_ENV=test
```

Configure the startup entry in `package.json`, for example:
```json
{
  ...
  "scripts": {
    "dev": "dotenv -e .test.env nodemon",
  }
  ...
}
```

### 3. Import configuration

Introduce in `/config/env.ts`
```ts
import configDev from "@/config/config.dev";
import configProd from "@/config/config.prod";
import configTest from "@/config/config.test";
import { CatEnv } from "./cat-env";

const appEnv = new CatEnv({
  'dev': configDev,
  'prod': configProd,
  'test': configTest
})

export default appEnv
```

### 3. Export configuration

Export the configuration you need in `/config/index.ts` and provide it to other files for use.
```ts
import appEnv from './env';

const mixConfig = appEnv.getAppConfig()

export default {
  env: {
    APP_ENV: appEnv.env
  },
  port: mixConfig.port,
}
```