// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView/HomeView.vue'
const routes = [
  {
    path: '/',
    component: HomeView,
    children: [{
      path: 'about',
      component: () => import('@components/About/About.vue'),
    }, {
      path: 'news',
      component: () => import('@components/News/News.vue'),
    }, {
      path: 'menu',
      component: () => import('@components/Menu/Menu.vue'),
    }, {
      path: 'gallery',
      component: () => import('@components/Gallery/Gallery.vue'),
    }, {
      path: 'catering',
      component: () => import('@components/Catering/Catering.vue'),
    }, {
      path: 'contact',
      component: () => import('@components/Contact/Contact.vue'),
    }
    ]
  },
  {
    path: '/admin',
    component: () => import('@views/AdminView/AdminView.vue'),
    children: [{
      path: 'news',
      component: () => import('@/components/_admin/AdminNews/AdminNews.vue'),
    }, {
      path: 'menu',
      component: () => import('@/components/_admin/AdminMenu/AdminMenu.vue'),
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
