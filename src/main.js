import { createApp } from "vue"

import App from "./App.vue"

//引入router
import router from "@/router/index.js"

createApp(App).use(router).mount("#app")
