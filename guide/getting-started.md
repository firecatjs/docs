# Getting Started

## Installation

Create a new project

```bash
npx fire-cat init
```
Follow the prompts to enter the project name and description

```bash
cd your-project-name

yarn
# or
npm install
```

Start the project

```bash
npm run dev
```

After execution, you will see logs similar to the following in the console:


```bash
[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `cross-env APP_ENV=dev ts-node -r tsconfig-paths/register src/index.ts`
🐳️app is running at http://127.0.0.1:3000 env: [dev]
```

## Directory Structure
```
project-root
├── build
└── src
   ├── config
   ├── controller
   ├── log
   ├── router
   ├── decorators
   ├── mixin
   ├── index.ts # app entry
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

