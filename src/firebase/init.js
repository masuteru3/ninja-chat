import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6n48hh4dIvKhesytBiq7UDkXdwERsZLU",
  authDomain: "udemy-ninja-chat-eed3c.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-eed3c.firebaseio.com",
  projectId: "udemy-ninja-chat-eed3c",
  storageBucket: "udemy-ninja-chat-eed3c.appspot.com",
  messagingSenderId: "789678936897",
  appId: "1:789678936897:web:ee67dadaef1b6e0d2f87c0",
  measurementId: "G-1KF50DW9TR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export forestore database
export default firebaseApp.firestore()