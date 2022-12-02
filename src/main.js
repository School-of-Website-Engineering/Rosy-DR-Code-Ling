import Vue from "vue"

import App from "./App.vue"

//引入router
import router from "@/router"

//关闭生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	render: (h) => h(App),
	//注册路由
	router
}).$mount("#app")
