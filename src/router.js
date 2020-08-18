import Vue from 'vue'
import VueRouter from 'vue-router'
const Scanner = () => import('./views/Scanner.vue')
const Home = () => import('./views/Home.vue')
const Settings = () => import('./views/Settings.vue')
const Products = () => import('./views/Products.vue')
const Orders = () => import('./views/Orders.vue')
const AddOrder = () => import('./views/AddOrder.vue')
const EditProduct = () => import('./views/EditProduct.vue')
const Login = () => import('./components/Login.vue')
const Register = () => import('./components/Register.vue')
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
        path: '/products/:productId',
        name: 'productsID',
        component: Products,
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
        path: '/products/:userId/manage',
        name: 'editproduct',
        component: EditProduct,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/addorder',
        name: 'addorder',
        component: AddOrder,
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