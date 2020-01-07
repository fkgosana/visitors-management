import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
var firebaseConfig = {
    apiKey: "AIzaSyA9xv45XbSRwjHv4k4agkL33lgZhH-AzxM",
    authDomain: "visitors-management-ab68f.firebaseapp.com",
    databaseURL: "https://visitors-management-ab68f.firebaseio.com",
    projectId: "visitors-management-ab68f",
    storageBucket: "visitors-management-ab68f.appspot.com",
    messagingSenderId: "454316984755",
    appId: "1:454316984755:web:166c906300addc6b2923c6",
    measurementId: "G-9BG3EHCY0R"
  };
firebase.initializeApp(firebaseConfig)
firebase.analytics();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
//const usersCollection = db.collection('users')
//const postsCollection = db.collection('posts')


export {
    db,
    auth,
    currentUser,
}