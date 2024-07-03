# Docker deployment

## Package project

```bash
npm run build
```

```bash
docker build -t your-app-name .
```

## Deployment startup

```bash
docker run -p 3000:3000 your-app-name
```

You can modify `Dockerfile` to achieve the functions you want