# 配置

## 配置文件目录结构

```
└── config
   ├── fire-env.ts
   ├── config.dev.ts
   ├── config.prod.ts
   ├── env.ts
   └── index.ts
```

## 默认的配置文件
项目默认了两个配置文件，分别是 `config.dev.ts` 和 `config.prod.ts`，它们对应了开发环境和线上的环境，你可以在里面自定义你的配置，然后在 `index.ts` 文件里导出给其他需要的地方使用。

## 自定义你的配置文件

#### 1、新建文件
在 `/config` 文件夹里新建你的配置文件，例如 `config.test.ts`，然后配置文件内容：

`config.test.ts`

```ts
export default {
  foo: 'test',
  port: 3000,
}
```

#### 2、配置启动入口

在 `package.json` 里配置启动入口，例如：
```json
{
  ...
  "scripts": {
    "dev": "cross-env APP_ENV=test nodemon",
  }
  ...
}
```

### 3、引入配置

在 `/config/env.ts` 里引入

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

### 3、导出配置

在 `/config/index.ts` 里导出你需要的配置，提供给其他文件使用。

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