class Product {
    constructor(title, description, stock, price, category) {
        this.title = title;
        this.description = description;
        this.stock = stock;
        this.price = price;
        this.category = category;
    }
}

class Order {
    constructor(customer, products, status, price) {
        this.customer = customer;
        this.products = products;
        this.status = status;
        this.price = price;
    }
}

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },

    setLoadingStatus(state, payload) {
        state.loadingStatus = payload
    },

    addTimeline(state, payload) {
        state.orders[payload.id].push(payload.message)
    },

    setError(state, payload) {
        state.error = payload;
    },

    addIncome(state, payload) {
        state.income = state.income + payload;
    },

    flyout(state, payload) {
        state.flyout = payload;
    },

    addOrder(state, payload) {
        state.orders.push(new Order(
            payload.customer,
            payload.products,
            payload.status,
            payload.price
        ));
        
        state.orders.forEach((item, i) => {
            item.id = i + 1;
        });
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