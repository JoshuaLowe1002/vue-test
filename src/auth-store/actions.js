import firebase from "firebase/app";
import router from "../router";

var db = firebase.firestore;

const actions = {
    authAction({ commit }) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                commit("setUser", user);
            } else {
                commit("setUser", null);
            }
        });
    },
    signUpAction({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(function(result) {
                result.user.updateProfile({
                    displayName: payload.name
                });
            })
            .catch(error => {
                commit("setError", error.message);
            });
    },
    signInAction({ commit }, payload) {
        firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .catch(error => {
                commit("setError", error.message);
            });
    },
    signOutAction({ commit }) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                commit("setUser", null);
                router.push({ name: "Login" });

            })
            .catch(error => {
                commit("setError", error.message);
            });
    }
};

export default actions;