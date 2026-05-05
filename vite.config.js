import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
	base: "/Rosy-DR-Code-Ling/",
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	server: {
		allowedHosts: ["vps3.pista.top", ".pista.top"]
	}
})
