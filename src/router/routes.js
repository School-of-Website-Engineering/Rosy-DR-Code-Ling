// 配置路由
export default [

  {
    path: '/home',
    component: () => import('@/views/Home'),
    name: 'home',
  },
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/pxd',
    component: () => import('@/views/Mods/PXD'),
    name: 'pxd',
  },
  {
    path: '/rts',
    component: () => import('@/views/Mods/RTS'),
    name: 'rts',
  },
  {
    path: '/tml',
    component: () => import('@/views/Mods/TML'),
    name: 'tml',
  },
]
