# Introduction

FireCat originated around March 11, 2022, with the idea of designing a simple and efficient framework for creating server-side programs. At that time, there were many Node.js server-side frameworks, such as `Expressjs`, `Koajs`, `Eggjs`, `Nestjs`, etc. Each had its own strengths and weaknesses. However, an excellent server-side framework should possess high performance and a developer-friendly development approach. FireCat was born from this idea. Based on Koajs, FireCat extends a simple and elegant server-side development approach. FireCat combines Koajs' `middleware` with decorators, making server-side development easier.

![An image](/images/fire-banner.png)

## Why should you use FireCat?

FireCat uses TypeScript as the main development language and comes with built-in basic server-side development features.
Even in small server-side applications, you can get the following features:

* Development hot-reloading
* Implement various functions based on decorators
* Interceptors (middleware) based on decorators
* Field validation
* Logging
* Documentation service
* Webpack packaging
* Custom interceptors
* Grouped routing
* Support for configuration files in various environments

## Basic Example

Handling requests
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

Group Routers

```ts
fireCatRouter.controller('/', new HomeController())

fireCatRouter.group('/api/v1', (v1)=> {
  v1.group('/admin', (admin) => {
    admin.controller('/banner', new BannerController())
  })
})
```

Parameter Validation
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
## Why is it named FireCat?

FireCat = 🔥 + 🐱, which means it has the development efficiency of "fire" and the elegance of "cat".

## Comparison with other frameworks

FireCat is a small and beautiful framework, with a different focus from other frameworks. At the same time, each server-side framework has its own unique focus. FireCat focuses on rapid development + elegant development experience.