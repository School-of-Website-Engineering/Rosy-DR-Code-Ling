// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// {Main Pages}
import Header from '../../src/components/Header/Header.vue'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [{
  path: '/home',
  component: Header
},
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes
})

// 3.将router对象传入到Vue实例，即导出，然后在main.js中导入
export default router
