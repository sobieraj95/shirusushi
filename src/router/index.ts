// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView/HomeView.vue'
import AdminView from '@views/AdminView/AdminView.vue'

const About = () => import('@components/About/About.vue')
const News = () => import('@components/News/News.vue')
const Menu = () => import('@components/Menu/Menu.vue')
const Gallery = () => import('@components/Gallery/Gallery.vue')
const Catering = () => import('@components/Catering/Catering.vue')
const Contact = () => import('@components/Contact/Contact.vue')
const AdminNews = () => import('@/components/_admin/AdminNews/AdminNews.vue')
const AdminMenu = () => import('@/components/_admin/AdminMenu/AdminMenu.vue')

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [{
      path: 'about',
      component: About,
    }, {
      path: 'news',
      component: News,
    }, {
      path: 'menu',
      component: Menu,
    }, {
      path: 'gallery',
      component: Gallery,
    }, {
      path: 'catering',
      component: Catering,
    }, {
      path: 'contact',
      component: Contact,
    }
    ]
  },
  {
    path: '/admin',
    component: AdminView,
    children: [{
      path: 'news',
      component: AdminNews,
    }, {
      path: 'menu',
      component: AdminMenu,
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
