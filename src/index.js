/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 19:26:13
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 19:36:24
 */

new Lin({
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