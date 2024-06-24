# 请求装饰器

系统提供的，在请求的时候作出一些动作的装饰器。

## @Request()

使用后，将post或者get获取懂啊的用户输入参数，合并到`ctx.request.body`里。

```ts
import {Context, FireCatController, Get, Request} from "fire-cat";

export class HomeController extends FireCatController {

  @Get('/')
  @Request()
  index(ctx: Context) {
    console.log(ctx.request.body)
    ctx.body = 'hello world'
  }

}

```