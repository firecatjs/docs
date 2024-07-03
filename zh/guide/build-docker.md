# Docker部署

## 打包项目

```bash
npm run build
```

```bash
docker build -t your-app-name .
```

## 部署启动

```bash
docker run -p 3000:3000 your-app-name
```

你可以修改 `Dockerfile` 来实现你想要的功能