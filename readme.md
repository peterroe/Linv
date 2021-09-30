<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 11:33:51
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 20:27:09
-->
## What is Lin?

:rocket: a micro framwork like Vue :zap: 

## Usage

```js
new Linv({
    el: '#app',
    data: {
        name: 'Peter Roe',
        age: 23,
    },
    template: `
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
    `
})
```

## result

```
姓名：Peter Roe
年龄：23
```