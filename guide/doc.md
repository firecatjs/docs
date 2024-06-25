# Interface Documentation Service

`FireCat` has a built-in documentation service function, you can quickly open the interface documentation

## Use the documentation service

Annotate the interface in the controller

```ts
import { AppController } from "@/mixin/appController";
import {ApiDescription, Context, Get, Request} from "fire-cat";
import schema from "./schema";

export class HomeController extends AppController {

  @Get('/')
  @Request()
  @AppVerify(schema.test)
  @ApiDescription('This is the home page interface') // Comment on the interface
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```
Configure the enabled interface document

```ts
// Configure the request path and document configuration
fireRouter.enableDocument('/document', {
  title: 'Interface document title', // Title
  description: 'This is the interface document introduction', // Introduction
  date: '2022-05-20', // Date
  version: '1.0.0' // Version number
})
```

Access `/document` to return the result. The result includes the requested path, the requested validation rules, etc.
```json
{
  "title": "title",
  "description": "title",
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

The corresponding UI interface of the interface document and more complete interface document functions will be launched later.