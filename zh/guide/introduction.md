# 简介


FireCat 起始于 2022 年 3 月 11日左右的一次想法，其目的是设计一个简单高效创建服务端程序的框架。当时的 Nodejs服务端框架有很多，例如 `Expressjs`、`Koajs`、`Eggjs`、`Nustjs`等，他们都有各自的优点和缺点，但是一个优秀的服务端框架要具备高性能和对开发者友好的开发方式，FireCat 就是基于两者而诞生的，FireCat 基于 Koajs，在此基础上拓展出来了一套简单优雅的服务端开发方式，FireCat 将 Koajs 的 `middleware` 和装饰器结合起来，让开发服务端程序变得更简单。

![An image](/images/fire-banner.png)


## 为什么你应该使用 FireCat？  

FireCat 使用 Typescript作为主要开发语言，FireCat 内置了服务端开发的基本功能。
即使在小型服务端应用中，你也可以获得如下功能：

* 开发热更新
* 基于装饰器实现各种功能
* 基于装饰器的拦截器（middleware）
* 字段验证
* 日志
* 文档服务
* Webpack 打包
* 自定义拦截器
* 分组路由
* 支持各种环境的配置文件

## 基础示例

处理请求
```ts
class MyController extends FireCatController {
  @Get('/news')
  @Request()
  news(ctx: Context) {
    ctx.body = "news list"
  }

  @Post('/news/update')
  @Request()
  updateNews(ctx: Context) {
    ctx.body = "success"
  }
}
```

分组路由
```ts
fireCatRouter.controller('/', new HomeController())

fireCatRouter.group('/api/v1', (v1)=> {
  v1.group('/admin', (admin) => {
    admin.controller('/banner', new BannerController())
  })
})
```

参数验证
```ts
export default {
  show: createSchema({
    name: {
      type: 'string',
      empty: false,
      max: 255,
      description: '名字字段'
    },
  }),
}
```
```ts
import schema from './schema'

export default class TestController extends FireCatController {

  @Get('/show')
  @Request()
  @FireCatVerify(schema.show)
  async show (ctx: Context) {
    ctx.body = 'your name is ' + ctx.request.body.name
  }

}
```

## 为什么取名 FireCat？

FireCat = 🔥 + 🐱，意思为拥有“火”的开发效率和“猫”的优雅。

## 对比其他框架

FireCat 是一款小而美的框架，和其他框架的着重点不一样，同时来说每一款服务端框架都有自己的特色着重点，FireCat 的着重点是快速开发 + 优雅的开发体验。