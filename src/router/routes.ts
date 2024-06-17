const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('../pages/TestPage.vue') },
      { path: '/home', component: () => import('../pages/Home.vue') },
      { path: '/about', component: () => import('../pages/Home.vue') }
    ]
  }
]

export default routes