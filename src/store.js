import Vue from "vue";
import Vuex from "vuex";
import mutations from "./auth-store/mutations";
import actions from "./auth-store/actions";
import getters from "./auth-store/getters";

Vue.use(Vuex);

class Product {
    constructor(title, stock, category, price) {
        this.title = title;
        this.stock = stock;
        this.category = category;
        this.price = price;
    }
}

const initialState = () => {
    var products = [
        new Product(
            'iPhone 11 Pro',
            '4',
            'Apple',
            '1499'
        ),
        new Product(
            'Galaxy Note 20',
            '10',
            'Android',
            '1299'
        ),
    ];
    return { user: null, error: null, products };
};

export default new Vuex.Store({
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
});