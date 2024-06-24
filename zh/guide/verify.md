# 验证

验证处理用户的传来的数据。在初始化的项目里提供了基本的数据验证工具。

## 使用数据验证

`schema.ts`
```ts
import {createSchema} from "fire-cat";
export default {
  test: createSchema({
    name: {
      type: 'string',
      empty: false,
      max: 255,
    },
  })
}
```
`controller.ts`

```ts
import { AppController } from "@/mixin/appController";
import {Context, Get, Request} from "fire-cat";
import schema from "./schema";

export class HomeController extends AppController {

  @Get('/')
  @Request()
  @AppVerify(schema.test)
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

}
```

我们看一下 `AppVerify` 的实现代码

```ts
import {FireCatVerifyWrap} from "fire-cat";
import {AppController} from "@/mixin/appController";
import {Context} from "fire-cat/lib/types";

class AppVerifyController extends AppController {
  async wrap(ctx: Context, message: string) {
    ctx.body = this.rule(message)
  }
}

export const AppVerify = FireCatVerifyWrap(async (message, ctx, next)=> {
  if (message) {
    await new AppVerifyController().wrap(ctx, message.message)
  } else {
    await next()
  }
})
```

你可以修改这个，实现你想要的功能。