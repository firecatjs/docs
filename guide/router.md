# Routing

`FireCat` provides routing definition, binding, and grouping functions.

## Define routing

Bind controller to routing

```ts
import {FireCatRouter} from "fire-cat";
import {HomeController} from "@/controller/home";
import {AboutController} from "@/controller/about";

const fireRouter = new FireCatRouter()

fireRouter.controller('/', new HomeController())
fireRouter.controller('/about', new AboutController())

export default fireRouter
```

## Group Routers

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

## Global route interceptor

You can pass in an interceptor when defining a route, and all requests under this route will first pass through this interceptor

```ts
const testGlobalMiddleware: KoaMiddleware = async (ctx, next)=> {
  ctx.hello = "world"
  await next();
}


fireCatRouter.controller('/test', new TestController(), [testGlobalMiddleware])
```