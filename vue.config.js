module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: './',

    pages: {
        index: {
            entry: "src/main.js",
        },
    },
    lintOnSave: false, //关闭语法检查
    //开启代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'https://fang.transfigure.cn:1852/',
                changeORigin: true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 移动端适配
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 37.5, // vant官方使用的是37.5
                        selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                        // rootValue : 37.5, //（数字，函数） 根元素字体大小
                        // unitPrecision: 5, //（数字）允许REM单位增长的十进制数字
                        // replace: true, // （布尔值）替换包含rems的规则，而不添加后备
                        // mediaQuery: false, // （布尔值）允许在媒体查询中转换px
                        // minPixelValue: 0, // （数字）设置要替换的最小像素值
                        // selectorBlackList  : ['vant', 'mu'], // 忽略转换正则匹配项
                        // propList   : ['*'], // 可以从px转换为rem的属性，匹配正则
                        // exclude: /node_modules/i // （字符串，正则表达式，函数）要忽略并保留为px的文件路径
                    })
                ]
            }
        }
    }
}