# 拦截器

拦截器，即自定义的请求时装饰器，可以在请求的时候作出一些处理。


```ts
import {FireCatController, Get, Request, Context} from "fire-cat";

export class HomeController extends FireCatController {

  @Get('/')
  @Auth()
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```
## 实现自定义拦截器

```ts
import {FireCatDecorator} from "fire-cat";

// 验证登陆
export const Auth = function () {
  return FireCatDecorator.registerImplement(async (ctx, next) => {
    // 模拟解析出用户数据
    ctx.state.userInfo = {
      id: 1,
      name: 'fake',
      some: 'bar'
    }
    await next()
  })
}
```
