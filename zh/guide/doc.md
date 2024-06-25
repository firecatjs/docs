# 接口文档服务

`FireCat` 内置了文档服务的功能，你可以快捷开启接口文档

## 使用文档服务

在控制器里进行接口注释

```ts
import { AppController } from "@/mixin/appController";
import {ApiDescription, Context, Get, Request} from "fire-cat";
import schema from "./schema";

export class HomeController extends AppController {

  @Get('/')
  @Request()
  @AppVerify(schema.test)
  @ApiDescription('这是首页的接口') // 对接口进行注释
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```

配置启用接口文档

```ts
// 配置请求路径，和文档配置
fireRouter.enableDocument('/document', {
  title: '接口文档标题', // 标题
  description: '这是接口文档简介', // 简介
  date: '2022-05-20', // 日期
  version: '1.0.0' // 版本号
})
```

访问 `/document` 返回结果。结果里面包含了请求的路径，请求的验证规则等。

```json
{
  "title": "接口文档",
  "description": "这是接口文档",
  "date": "2022-05-20",
  "version": "1.0.0",
  "body": [
    {
      "path": "/",
      "methods": "get",
      "rule": [],
      "description": "首页"
    },
    {
      "path": "/ping",
      "methods": "get",
      "rule": [
        {
          "name": {
            "type": "string",
            "empty": false,
            "max": 255
          }
        }
      ],
      "description": "ping的页面"
    },
    {
      "path": "/about",
      "methods": "get",
      "rule": [],
      "description": "about home page"
    },
    {
      "path": "/about/address",
      "methods": "get",
      "rule": [],
      "description": "about address page"
    },
    {
      "path": "/about/news",
      "methods": "get",
      "rule": [],
      "description": "about news page"
    },
    {
      "path": "/about/news/detail/:id",
      "methods": "get",
      "rule": [],
      "description": "about news detail page"
    }
  ]
}
```

后续会推出接口文档对应的ui界面，和更加完善的接口文档功能。