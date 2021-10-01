<!--
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 11:33:51
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 20:33:21
-->
## What is Linv?

:rocket: a micro framework like Vue :zap: 

## Install

```shell
yarn add linv
```

## Usage

```js
import Linv from 'linv'

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