import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuzZXb5Ev6Lc6VSVpkguOetLjqORxjyus",
  authDomain: "typing-test-7fb0d.firebaseapp.com",
  projectId: "typing-test-7fb0d",
  storageBucket: "typing-test-7fb0d.appspot.com",
  messagingSenderId: "957294272281",
  appId: "1:957294272281:web:bb56c3bcc1f054cea7af88"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()