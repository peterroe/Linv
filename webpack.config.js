/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 12:07:43
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 13:44:32
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin()
    ]
}