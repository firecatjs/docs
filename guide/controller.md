# Controller

The main function of a controller is to handle user requests. A controller class corresponds to different function implementations.

A simple controller example:
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
Controllers are generally used with various decorators to easily implement different functions. You can see detailed instructions in the `Decorators` section.

## Bind to Routes

After implementing the controller's functions, bind the controller to the routes.

```ts
import {FireCatRouter} from "fire-cat";
import {HomeController} from "@/controller/home";

const fireRouter = new FireCatRouter()

fireRouter.controller('/', new HomeController())
```

## Custom Controllers

Custom controllers allow you to implement various custom functions on the original controllers.
Ps: In the `FireCat` initialized project, basic custom controllers are provided in the `mixin` directory.

For example, unifying the return format:
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

Then you can use it happily:

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