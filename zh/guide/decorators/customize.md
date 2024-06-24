# 自定义装饰器

可以使用系统提供的API实现自定义的功能。

## 请求时装饰器
请求的时候会根据顺序调用装饰器

![middleware](/images/Snipaste_2024-06-24_14-45-34.jpg)

示例：
```ts
import {FireCatDecorator} from "fire-cat";

// 验证登陆
export const AuthLogin = function () {
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

注意⚠️：一定要在async的方法里面 await next()

## 定义时装饰器

这个通常不常用，一般是`FireCat`内置的一些装饰器会使用到。

示例：

```ts
export function Get(path: string) {
  return FireCatDecorator.registerImplement((target, propertyKey, decorator)=> {
    // 
  })
}
```


