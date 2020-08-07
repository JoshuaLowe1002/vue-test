import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './scss/app.scss'
import './assets/styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleRight, faCamera, faBarcode, faBars, faCog, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createProvider } from './vue-apollo'

library.add(faArrowAltCircleRight, faCamera, faBarcode, faBars, faHome, faCog, faShoppingCart);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount('#app')