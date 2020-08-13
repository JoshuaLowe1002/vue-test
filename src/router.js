import Vue from 'vue'
import VueRouter from 'vue-router'
import Scanner from './views/Scanner.vue'
import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import Products from './views/Products.vue'
import Orders from './views/Orders.vue'
import AddProduct from './views/AddProduct.vue'
import EditProduct from './views/EditProduct.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import firebase from "firebase/app";
import "firebase/auth";


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/scan',
        name: 'scan',
        component: Scanner,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/orders',
        name: 'orders',
        component: Orders,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/addproduct',
        name: 'addproduct',
        component: AddProduct,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/editproduct/:userId',
        name: 'editproduct',
        component: EditProduct,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        alias: "/"
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('register');
    else if (!requiresAuth && currentUser) next('/');
    else next();
});

export default router