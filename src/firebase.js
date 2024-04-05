import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3GdsDhk_QQilJ7PHdMLg6VX9JwPoZggE",
    authDomain: "discord-clone-f30a8.firebaseapp.com",
    projectId: "discord-clone-f30a8",
    storageBucket: "discord-clone-f30a8.appspot.com",
    messagingSenderId: "1081596963016",
    appId: "1:1081596963016:web:1f2cd27296b3bcf4d75dfd",
    measurementId: "G-XLFNW14GML"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db