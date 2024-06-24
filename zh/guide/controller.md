# 控制器

控制器主要的功能是处理用户的请求，一个控制器类，下面对应不同的功能实现。

一个简单的控制器示例：
```ts
export class HomeController extends FireCatController {

  @Get('/')
  @Request()
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Get('/foo')
  @Request()
  foo(ctx: Context) {
    ctx.body = 'bar'
  }

}
```

控制器一般搭配各种装饰器使用，来便捷实现不同功能，你可以在 `装饰器` 章节看到详细的说明。

## 绑定到路由

实现了控制器的功能之后，然后把控制器绑定到路由上。
```ts
import {FireCatRouter} from "fire-cat";
import {HomeController} from "@/controller/home";

const fireRouter = new FireCatRouter()

fireRouter.controller('/', new HomeController())
```

## 自定义控制器
自定义控制器可以让你在原有的控制器上实现各种自定义功能。  
Ps：`FireCat`初始化的项目里，在`mixin`目录里提供了基本的自定义控制器。

例如对返回格式的统一：
```ts
import {FireCatController} from "fire-cat";

export class AppController extends FireCatController {
  success(props: object) {
    return {
      code: 200,
      data: props
    }
  }
  error(props: object) {
    return {
      code: 500,
      data: props
    }
  }
}
```

然后你就可以愉快的使用：

```ts
class MyController extends AppController {
  @Post('/hello')
  hello(ctx: Context) {
    ctx.body = this.success({
      list: [1, 2, 3]
    })
  }
}
```