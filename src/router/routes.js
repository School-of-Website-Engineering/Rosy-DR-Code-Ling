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
]
