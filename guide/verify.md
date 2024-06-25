# Validation

Validate the data sent by the user. Basic data validation tools are provided in the initialization project.

## Use data validation

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

Let's take a look at the implementation code of `AppVerify`

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

You can modify this to do what you want.