import Vue from "vue";
import Vuex from "vuex";
import mutations from "./auth-store/mutations";
import actions from "./auth-store/actions";
import getters from "./auth-store/getters";

Vue.use(Vuex);

const initialState = () => {
    return { user: null, error: null };
};

export default new Vuex.Store({
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
});