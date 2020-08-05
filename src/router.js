import Vue from 'vue'
import Router from 'vue-router'
import Scanner from './views/Scanner.vue'
import Navbar from './views/Navbar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Navbar
        },
        {
            path: '/scan',
            name: 'scan',
            component: Scanner
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})