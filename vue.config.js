// vue.config.js

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
});

// //vant配置
// const { VantResolver } = require("unplugin-vue-components/resolvers");
// const ComponentsPlugin = require("unplugin-vue-components/webpack");
// module.exports = {
//     lintOnSave: false,
//     configureWebpack: {
//         plugins: [
//             ComponentsPlugin({
//                 resolvers: [VantResolver()],
//             }),
//         ],
//     },
//     // //代理服务器
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://gmall-h5-api.atguigu.cn", //代理转发路径
//                 pathRewrites: { "^/api": "" }, //匹配字符串
//                 ws: true, //支持websocket
//                 changeOrigin: true, //host源
//             },
//             // '/foo': {
//             //   target: '<other_url>'
//             // }
//         },
//     },
// };
