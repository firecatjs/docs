# Request decorator

A decorator provided by the system that performs some actions when making a request.

## @Request()

After use, post or get the user input parameters and merge them into `ctx.request.body`.

```ts
import {Context, FireCatController, Get, Request} from "fire-cat";

export class HomeController extends FireCatController {

  @Get('/')
  @Request()
  index(ctx: Context) {
    console.log(ctx.request.body)
    ctx.body = 'hello world'
  }

}

```