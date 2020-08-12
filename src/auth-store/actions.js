import firebase from "firebase/app";
import router from "../router";

var db = firebase.firestore;

const actions = {
    authAction({ commit }) {
        var authSettings = { url: "http://localhost:8080" }
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                if (firebaseUser.emailVerified == false && localStorage.getItem("email") !== true) {
                    firebaseUser.sendEmailVerification(authSettings).then(function() {
                        console.log('Sending Verification');
                        localStorage.setItem("email", "true");
                    }, function(error) {
                        console.log('Not sending verification');
                    });
                }
                if (firebaseUser.emailVerified == true) {
                    if (localStorage.getItem("email") !== null) {
                        localStorage.removeItem("email");
                    }
                    commit("setUser", firebaseUser);
                } else {
                    console.log("hi!");
                }

            } else {
                console.log('Not Logged In');
            }
        })
    },

    signUpAction({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(function(result) {
                result.user.updateProfile({
                    displayName: payload.name
                });
                localStorage.setItem("company", payload.company);
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