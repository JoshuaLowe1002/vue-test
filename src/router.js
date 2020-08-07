import Vue from 'vue'
import Router from 'vue-router'
import Scanner from './views/Scanner.vue'
import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/scan',
            name: 'scan',
            component: Scanner
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})