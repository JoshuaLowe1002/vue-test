import { auth } from '../firebase'
const getters = {
    getUser() {
        return auth.currentUser;
    },
    isUserAuth(state) {
        return !!state.user;
    },
    getError(state) {
        return state.error;
    },
    productList(state) {
        return state.products;
    }
};

export default getters;