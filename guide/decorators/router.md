# Route decorator

The route decorator is provided by the system and is used to assign route request paths to methods in controllers.

Usage:
```ts
import {FireCatController, Get, Request, Context} from "fire-cat";

export class HomeController extends FireCatController {

  @Get('/') // 为控制器定义路由
  @Request()
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Get('/detail/:id')
  @Request()
  detail(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```
List of supported route decorators:
* @Get()
* @Post()
* @Del()
* @Head()
* @Head()
* @Put()
* @All()