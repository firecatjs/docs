# 开始

## 安装

创建一个项目

```bash
npx fire-cat init
```
根据提示输入项目名称和简介即可

```bash
cd your-project-name

yarn
# or
npm install
```

启动项目
```bash
npm run dev
```

执行完成后，控制台下会看到类似下面的日志：
```bash
[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `cross-env APP_ENV=dev ts-node -r tsconfig-paths/register src/index.ts`
🐳️app is running at http://127.0.0.1:3000 env: [dev]
```

## 目录结构
```
project-root
├── build # 打包配置
└── src
   ├── config # 配置文件
   ├── controller # 控制器
   ├── log # 日志util
   ├── router # 路由
   ├── decorators # 自定义装饰器
   ├── mixin # 自定义的一些mixin
   ├── index.ts # app 入口
├── .babelrc
├── .gitignore
├── LICENSE
├── README.md
├── README.zh-cn.md
├── ecosystem.config.js
├── nodemon.json
├── package.json
└── tsconfig.json
```

