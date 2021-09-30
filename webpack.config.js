/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-30 12:07:43
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-30 19:27:49
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        core: './src/main.js',
        test: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            catch: false
        })
    ]
}