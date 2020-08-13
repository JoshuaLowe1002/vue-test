import Vue from "vue";
import Vuex from "vuex";
import mutations from "./auth-store/mutations";
import actions from "./auth-store/actions";
import getters from "./auth-store/getters";

Vue.use(Vuex);

class Product {
    constructor(title, description, stock, price, category) {
        this.title = title;
        this.description = description;
        this.stock = stock;
        this.price = price;
        this.category = category;
    }
}

const initialState = () => {
    var products = [
        new Product(
            'iPhone 11 Pro',
            'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedent­ed leap in battery life. And a mind‑blowing chip that elevates machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
            '4',
            '1499',
            'Apple'
        ),
        new Product(
            'Galaxy S20 Ultra',
            'Meet S20 Ultra. With revolutionary 8K Video Snap changing how you capture not just video but photography — and 5G changing the way you share it. Add in Samsung Knox security, an intelligent battery, powerful processor and massive storage — and the Galaxy S20 Ultra unveils a whole new world for mobile.',
            '10',
            '1299',
            'Android'
        ),
        new Product(
            'Water Bottle',
            'Bottle of water',
            '15',
            '5.99',
            'Misc'
        ),
        new Product(
            'Coca-Cola',
            'Bottle of Coke',
            '63',
            '1.20',
            'Misc'
        ),
    ];
    
    products.forEach((item, i) => {
        item.id = i + 1;
      });
    return { user: null, error: null, products };
};

export default new Vuex.Store({
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
});