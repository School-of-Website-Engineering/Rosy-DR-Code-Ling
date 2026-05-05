import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0 }
	}
})

export default router
