import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './scss/app.scss'
import './assets/styles/index.css'


import VueI18n from 'vue-i18n';

import SortedTablePlugin from "vue-sorted-table";
Vue.use(SortedTablePlugin);

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

import { auth } from './firebase'

Vue.use(VueI18n);

const messages = {
    en: {
        message: {
            hello: 'Please select an option to continue',
            welcome: 'Welcome to',
            crescent: 'Crescent',
            menu: 'Menu',
            login: 'Login',
            orders: 'Orders',
            register: 'Register',
            refresh: 'Refresh',
            productname: 'Product Name',
            stock: 'Stock',
            picking: 'Picking',
            category: 'Category',
            view: 'View',
            scanmessage: 'Please choose a scanning option...',
            camera: 'Camera',
            cameramessage: 'Use your devices camera to scan barcodes',
            hardware: 'Hardware',
            hardwaremessage: 'Use a handheld hardware scanner to scan multiple barcodes.',
            select: 'Select',
            home: 'Dashboard',
            products: 'Products',
            scan: 'Scan',
            settings: 'Settings',
            delete: 'Delete',
            userinfo: 'User Information',
            logout: 'Logout',
            clear: 'Clear',
            scannersetting: 'Scanner Setting',
            fulfilmentprovider: 'Fulfilment Provider',
            dashboard: 'Dashboard',
            addaproduct: 'Add a product',
            viewmyorders: 'View my orders',
            contactsupport: 'Contact Support',
            NewsOffers: 'News + Offers',
            orderstoday: 'Orders Today',
            shipped: 'Shipped',
            processed: 'Processed',
            search: 'Search',
            morning: 'Good Morning',
            afternoon: 'Good Afternoon',
            evening: 'Good Evening',
            new: "New"
        }
    },
    de: {
        message: {
            hello: 'Bitte wählen Sie eine Option, um fortzufahren',
            welcome: 'Willkommen zu',
            orders: 'Orders',
            crescent: 'Crescent',
            menu: 'Willkommen zu',
            login: 'Anmeldung',
            register: 'Registrieren',
            refresh: 'Aktualisierung',
            productname: 'Produktname',
            language: 'Language',
            stock: 'Lager',
            category: 'Kategorie',
            view: 'Aussicht',
            scanmessage: 'Bitte wählen Sie eine Scanoption...',
            camera: 'Kamera',
            cameramessage: 'Verwenden Sie die Kamera Ihres Geräts, um Barcodes zu scannen',
            hardware: 'Hardware',
            hardwaremessage: 'Verwenden Sie einen Handheld-Hardware-Scanner, um mehrere Barcodes zu scannen.',
            select: 'Wählen',
            home: 'Zuhause',
            products: 'Produkte',
            scan: 'Scan',
            settings: 'Die Einstellungen',
            delete: 'Löschen',
            userinfo: 'Nutzerinformation',
            logout: 'Ausloggen',
            clear: 'Klar',
            scannersetting: 'Scannereinstellung',
            fulfilmentprovider: 'Erfüllungsanbieter',
            dashboard: 'Instrumententafel',
            addaproduct: 'Hinzufügen Produkt',
            viewmyorders: 'Aussicht Aufträge',
            contactsupport: 'Unterstützung',
            NewsOffers: 'News + Angebote',
            orderstoday: 'Bestellungen heute',
            shipped: 'Versand',
            processed: 'Verarbeitet',
            search: 'Suche',
            morning: 'Guten Morgen',
            afternoon: 'Guten Tag',
            evening: 'Guten Abend',
            new: 'Neu'
        }
    }
};

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});


import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleRight, faCamera, faBarcode, faBars, faCog, faHome, faShoppingCart, faChartLine, faReceipt, faBox, faDollyFlatbed, faSearch, faLifeRing, faBell, faPoundSign, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createProvider } from './vue-apollo'

library.add(faArrowAltCircleRight, faCamera, faBarcode, faBars, faHome, faCog, faShoppingCart, faChartLine, faReceipt, faBox, faDollyFlatbed, faSearch, faLifeRing, faBell, faPoundSign, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app

auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            i18n,
            apolloProvider: createProvider(),
            render: h => h(App)
        }).$mount('#app')
    }
})