# 装饰器

装饰器可以为控制器实现各种功能，装饰器一般搭配控制器使用。

一个简单的装饰器示例：

```ts
import {FireCatController, Get, Request, Context} from "fire-cat";

export class HomeController extends FireCatController {

  @Get('/') // 为控制器定义路由
  @Request() // 为请求合并获取到的用户输入参数
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```

```ts
export const Auth1 = function () {
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


## 装饰器分类
装饰器按照功能，分为了不同类型的装饰器：

* **请求时装饰器**  
  请求的时候作出一些处理的装饰器，例如 `@Request()` 和请求拦截器就是一种请求时装饰器。这个相当于`Koajs`的`middleware`
![middleware](/images/Snipaste_2024-06-24_14-45-34.jpg)

* **路由装饰器**  
  用于定义路由的装饰器。
* **定义时装饰器**  
  定义之后就会对当前控制器做一些操作的装饰器，例如 `@Get()` 路由装饰器就是一种定义时装饰器。

## 路由装饰器

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

}
```

## 定义时装饰器

在定义之后就会对当前控制器做一些操作的装饰器，例如 `@Get()` 路由装饰器就是一种定义时装饰器。