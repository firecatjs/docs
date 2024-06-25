# Interceptor

Interceptor, that is, a custom request decorator, can do some processing when requesting.

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
## Implement a custom interceptor

```ts
import {FireCatDecorator} from "fire-cat";

// Verify login
export const Auth = function () {
  return FireCatDecorator.registerImplement(async (ctx, next) => {
    // Simulate parsing user data
    ctx.state.userInfo = {
      id: 1,
      name: 'fake',
      some: 'bar'
    }
    await next()
  })
}
```