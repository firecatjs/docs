# Custom decorator

You can use the API provided by the system to implement custom functions.

## Request decorator
Decorators are called in order when requested

![middleware](/images/Snipaste_2024-06-24_14-45-34.jpg)

Example:
```ts
import {FireCatDecorator} from "fire-cat";

// Verify login
export const AuthLogin = function () {
  return FireCatDecorator.registerImplement(async (ctx, next) => {
    // Simulate parsing user data
    ctx.state.userInfo = {
      id: 1,
      name: 'fake',
      some: 'bar'
    }
    await next()
  })
}
```

Note⚠️: Be sure to await next() in the async method

## Define decorator

This is usually not commonly used, and is generally used by some built-in decorators of `FireCat`.

Example:

```ts
export function Get(path: string) {
  return FireCatDecorator.registerImplement((target, propertyKey, decorator)=> {
    //
  })
}
```