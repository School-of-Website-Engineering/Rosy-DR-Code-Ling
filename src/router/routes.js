// 配置路由
export default [

	{
		path     : "/home",
		component: () => import("@/views/Home"),
		name     : "home"
	},
	{
		path    : "*",
		redirect: "/home"
	},
	{
		path     : "/pxd",
		component: () => import("@/views/Mods/PXD"),
		name     : "pxd"
	},
	{
		path     : "/rts",
		component: () => import("@/views/Mods/RTS"),
		name     : "rts"
	},
	{
		path     : "/tml",
		component: () => import("@/views/Mods/TML"),
		name     : "tml"
	},
	{
		path     : "/re",
		component: () => import("@/views/DevTeam/Re"),
		name     : "re"
	},
	{
		path     : "/mlpd",
		component: () => import("@/views/DevTeam/MLPD"),
		name     : "mlpd"
	},
	{
		path     : "/skyhell",
		component: () => import("@/views/DevTeam/SkyHell"),
		name     : "skyhell"
	},
	{
		path     : "/abt",
		component: () => import("@/views/Abt"),
		name     : "abt"
	},
	{
		path     : "/thanks",
		component: () => import("@/views/Thanks"),
		name     : "thanks"
	}
]
