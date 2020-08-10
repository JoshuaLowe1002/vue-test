import firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyACDTMA2P1h1jkzsXbb1R1PtQMg96eqZ0Y",
    authDomain: "crescent-a0c27.firebaseapp.com",
    databaseURL: "https://crescent-a0c27.firebaseio.com",
    projectId: "crescent-a0c27",
    storageBucket: "crescent-a0c27.appspot.com",
    messagingSenderId: "33181035689",
    appId: "1:33181035689:web:efd73ed3ad5cb8f9d70db8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
    auth
}