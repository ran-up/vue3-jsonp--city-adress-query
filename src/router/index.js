import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/city',
            name: 'city',
            component: () => import('../views/city.vue')
        },
        {
            path: '/beijing',
            name: 'beijing',
            component: () => import('../views/views.vue')
        },
        {
            path: '/tianjin',
            name: 'tianjin',
            component: () => import('../views/views.vue')
        },
        {
            path: '/shanghai',
            name: 'shanghai',
            component: () => import('../views/views.vue')
        },
        {
            path: '/chongqing',
            name: 'chongqing',
            component: () => import('../views/views.vue')
        }
    ]
})

export default router
