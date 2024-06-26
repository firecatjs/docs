# 路由

`FireCat`提供了路由的定义、绑定、分组路由功能。

## 定义路由

绑定控制器到路由

```ts
import {FireCatRouter} from "fire-cat";
import {HomeController} from "@/controller/home";
import {AboutController} from "@/controller/about";

const fireRouter = new FireCatRouter()

fireRouter.controller('/', new HomeController())
fireRouter.controller('/about', new AboutController())

export default fireRouter
```

## 分组路由

```ts
import {FireCatRouter} from "fire-cat";


const fireRouter = new FireCatRouter()

fireRouter.group('/api/v1', (v1)=> {
  v1.controller('/config', new ConfigController())

  v1.group('/admin', (admin) => {
    admin.controller('/banner', new AdminBanner())
    admin.controller('/channel', new AdminChannel())
  })

  v1.group('/blue', (admin) => {
    admin.controller('/feed', new FeedController())
    admin.controller('/sheet', new SheetController())
  })

  v1.controller('/user', new UserController())
  v1.controller('/auth', new AuthController())

})

```

## 全局路由拦截器

你可以在定义路由的时候，传入拦截器，这个路由下的所有请求都会首先经过这个拦截器

```ts
const testGlobalMiddleware: KoaMiddleware = async (ctx, next)=> {
  ctx.hello = "world"
  await next();
}


fireCatRouter.controller('/test', new TestController(), [testGlobalMiddleware])
```