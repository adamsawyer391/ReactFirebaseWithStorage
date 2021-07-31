
import firebase from 'firebase'
import 'firebase/storage'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6eVuLRCV6ISy3v8L7YMg8gk68fZueXhI",
    authDomain: "socialape-8bd04.firebaseapp.com",
    projectId: "socialape-8bd04",
    storageBucket: "socialape-8bd04.appspot.com",
    messagingSenderId: "656397039777",
    appId: "1:656397039777:web:9a519806500cb2b51f98e0",
    measurementId: "G-H25NGWQBNV"
});

// const storage = firebaseApp.storage();
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default firebaseApp;