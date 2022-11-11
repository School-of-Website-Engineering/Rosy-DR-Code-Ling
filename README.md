# Rosy DR-Code Ling

![](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E4%B8%AD-green)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![](https://img.shields.io/crates/l/s)](https://img.shields.io/crates/l/s)

Rosy DR-Code Ling 的 Web 页面

---

## 内容列表

- [Rosy DR Code Ling Web](#rose-dr-code-ling-web)
  - [内容列表](#内容列表)
  - [背景](#背景)
  - [相关仓库](#相关仓库)
  - [维护者](#维护者)
  - [如何贡献](#如何贡献)
    - [贡献者](#贡献者)
    - [特别感谢：](#特别感谢)
  - [使用许可](#使用许可)

## 背景

`Rosy DR-Code Ling-Web` 最开始因为 [@liusxs](https://github.com/liusxs) 在项目 [Kaka-International-Car-Rental-Network](https://github.com/Galaxy-Wish-Star/Kaka-International-Car-Rental-Network) 中了解到[@LingASDJ](https://github.com/LingASDJ)还未为自己的 `MagicLingPixelDungeon`项目开发 Web 界面，同时还有 `Galaxy StarRiver & SkyHell`没有网页。因此我们一拍即合，这个项目也就从这开始了。

## 相关仓库

- [Web_DEV_ING](https://github.com/Galaxy-Wish-Star/Web_DEV_ING) — 💌 Galaxy-Wish-Star 团队的开发进程
- [卡卡国际租车](https://github.com/Galaxy-Wish-Star/Kaka-International-Car-Rental-Network) — 卡卡国际租车网，项目专用仓库

## 维护者

[@mason369](https://github.com/mason369)  
[@liusxs](https://github.com/liusxs)  
[@LingASDJ](https://github.com/LingASDJ)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/School-of-Automation-Engineering/Magic-Ling-Pixel-Dungeon-Web/issues) 或者提交一个 Pull Request。

Rosy DR-Code Ling-Web 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。

### 贡献者

<a href="https://github.com/liusxs"><img style="border-radius:50%;height:60px;" src="https://avatars.githubusercontent.com/u/101164913?v=4" /></a>
<a href="https://github.com/LingASDJ"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/70191651?v=4" /></a>
<a href="https://github.com/mason369"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/93964390?s=96&v=4" /></a>
<a href="https://github.com/Complexxxxx"><img style="border-radius:50%;height:60px" src="https://avatars.githubusercontent.com/u/81176567?s=96&v=4" /></a>

感谢以上参与项目的人：

---

### 特别感谢：

[IntelliJ WebStorm](https://zh.wikipedia.org/zh-hans/IntelliJ_IDEA) 是一款在各方面最大限度地提高开发人员生产力的 IDE，适用于前端平台语言。

<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.png?_gl=1*10616q8*_ga*MTEwMzE4MDQwOS4xNjU0NzQ0NjIw*_ga_9J976DJZ68*MTY1NTA5NzcyOC4yLjEuMTY1NTA5ODE3Ni42MA..&_ga=2.237879491.294686240.1655097729-1103180409.1654744620" width="200px"/>

[Node.js](https://nodejs.org/en/) 对一些特殊用例进行优化，提供替代的API，使得V8在非浏览器环境下运行得更好，V8引擎执行Javascript的速度非常快，性能非常好，基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。   
<img src="https://nodejs.org/static/images/logo.svg" width="200px"/>  

[Visual Studio Code](https://code.visualstudio.com/)在 Windows、macOS 和 Linux 上运行的独立源代码编辑器。   
JavaScript 和 Web 开发人员的最佳选择，具有几乎可支持任何编程语言的扩展。  
<img src="https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png" width="200px"/>

[Vue.js](https://cn.vuejs.org/)前端先进的渐进式JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。   
<img src="https://cn.vuejs.org/logo.svg" width="200px"/>

**当前进度**：

- [x] 人员招募
- [x] 方案设计
- [ ] 编码
- [ ] Debug 测试
- [ ] 完成！

## 使用许可

[Apache License 2.0](LICENSE) © Richard Littauer

## 本地部署
``` bash
//出于Github缓存和最新依赖考虑，我们默认不提供node_modules的文件夹以及依赖项
//如果是首次配置,需要优先安装CNPM
# npm install -g cnpm -registry=https://registry.npm.taobao.org 
//然后安装依赖，通过以下命令
# cnpm install

//Dev 服务器测试
# cnpm run dev

//构建模块
# cnpm run build

//注意：本项目使用DC模式，即Dev+Compile(开发即时编译模式)
```
