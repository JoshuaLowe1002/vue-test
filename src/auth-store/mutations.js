class Product {
    constructor(title, stock, category, price) {
        this.title = title;
        this.stock = stock;
        this.category = category;
        this.price = price;
    }
}

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },

    setError(state, payload) {
        state.error = payload;
    },

    addProduct(state, payload) {
        state.products.push(new Product(
            payload.title,
            payload.stock,
            payload.category,
            payload.price
        ))
    }


};

export default mutations;