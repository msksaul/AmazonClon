import { initializeApp, auth } from 'firebase';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDYBhqniRF-qwXfiR9gd56Ye8N40T8p6V8",
    authDomain: "clone-e4bfb.firebaseapp.com",
    databaseURL: "https://clone-e4bfb.firebaseio.com",
    projectId: "clone-e4bfb",
    storageBucket: "clone-e4bfb.appspot.com",
    messagingSenderId: "846890762548",
    appId: "1:846890762548:web:f54c5da0813f9220eee561",
    measurementId: "G-QMLQT4FKYH"
})

const authorization = auth()

export { authorization }