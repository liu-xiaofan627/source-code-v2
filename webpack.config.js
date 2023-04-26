const path = require('path')

module.exports = {
    // 入口
    entry: "./src/index.js",
    // 输出
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        clean: true
    },
    // 加载器
    module: {
        rules: []
    },
    // 插件
    // 模式
    devServer: {
        port: 9000,
        static: './',
    },
    mode: "development"
}