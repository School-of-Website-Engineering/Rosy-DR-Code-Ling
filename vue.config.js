// vue.config.js

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
});

module.exports = {
  lintOnSave: false,
  publicPath: '/Rosy-DR-Code-Ling/',
  devServer: {
    allowedHosts: [
      'vps3.pista.top', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.pista.top'   // .是二级域名的通配符   
    ],
  },
};
