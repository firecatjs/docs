# 路由装饰器

路由装饰器由系统提供，用来对控制器里的方法赋予路由请求路径。

用法：
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
支持的路由装饰器列表：
* @Get()
* @Post()
* @Del()
* @Head()
* @Head()
* @Put()
* @All()