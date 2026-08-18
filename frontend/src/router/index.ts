import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 每次路由跳转回到页面顶部，让每个根页面呈现独立打开的效果
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: '首页' },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: { title: '产品中心' },
    },
    {
      path: '/factory',
      name: 'factory',
      component: () => import('@/views/FactoryView.vue'),
      meta: { title: '走进工厂' },
    },
    {
      path: '/custom',
      name: 'custom',
      component: () => import('@/views/CustomView.vue'),
      meta: { title: '高端定制' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: '联系我们' },
    },
  ],
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title
    ? `${title} · 源木家具 YUANMU`
    : '源木家具 YUANMU · 家具源头工厂'
})

export default router
