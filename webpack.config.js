/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 12:07:43
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 12:58:38
 */
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
}