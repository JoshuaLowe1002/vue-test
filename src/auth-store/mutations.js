class Product {
    constructor(title, description, stock, price, category) {
        this.title = title;
        this.description = description;
        this.stock = stock;
        this.price = price;
        this.category = category;
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
            payload.description,
            payload.stock,
            payload.price,
            payload.category
        ));

        state.products.forEach((item, i) => {
            item.id = i + 1;
          });
        return { user: null, error: null, products };
    }


};

export default mutations;