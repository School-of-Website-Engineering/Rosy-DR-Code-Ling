// 配置路由
export default [

	{
		path     : "/home",
		component: () => import("@/views/Home/index.vue"),
		name     : "home"
	},
	{
		path    : "/:pathMatch(.*)*",
		redirect: "/home"
	},
	{
		path     : "/pxd",
		component: () => import("@/views/Mods/PXD/index.vue"),
		name     : "pxd"
	},
	{
		path     : "/rts",
		component: () => import("@/views/Mods/RTS/index.vue"),
		name     : "rts"
	},
	{
		path     : "/tml",
		component: () => import("@/views/Mods/TML/index.vue"),
		name     : "tml"
	},
	{
		path     : "/re",
		component: () => import("@/views/DevTeam/Re/index.vue"),
		name     : "re"
	},
	{
		path     : "/mlpd",
		component: () => import("@/views/DevTeam/MLPD/index.vue"),
		name     : "mlpd"
	},
	{
		path     : "/skyhell",
		component: () => import("@/views/DevTeam/SkyHell/index.vue"),
		name     : "skyhell"
	},
	{
		path     : "/abt",
		component: () => import("@/views/Abt/index.vue"),
		name     : "abt"
	},
	{
		path     : "/thanks",
		component: () => import("@/views/Thanks/index.vue"),
		name     : "thanks"
	}
]
