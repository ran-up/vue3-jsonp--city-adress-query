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
            component: () => import('../components/city.vue')
        },
        {
            path: '/beijing',
            name: 'beijing',
            component: () => import('../components/BeiJingCity.vue')
        },
        {
            path: '/tianjin',
            name: 'tianjin',
            component: () => import('../components/TianJinCity.vue')
        },
        {
            path: '/shanghai',
            name: 'shanghai',
            component: () => import('../components/ShangHaiCity.vue')
        },
        {
            path: '/chongqing',
            name: 'chongqing',
            component: () => import('../components/ChongQingCity.vue')
        }
    ]
})

export default router
