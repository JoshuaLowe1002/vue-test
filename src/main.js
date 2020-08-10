import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './scss/app.scss'
import './assets/styles/index.css'

import { auth } from './firebase'

import VueFirestore from 'vue-firestore';

Vue.use(VueFirestore);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleRight, faCamera, faBarcode, faBars, faCog, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createProvider } from './vue-apollo'

library.add(faArrowAltCircleRight, faCamera, faBarcode, faBars, faHome, faCog, faShoppingCart);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app

auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            apolloProvider: createProvider(),
            render: h => h(App)
        }).$mount('#app')
    }
})