// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuo25CVLydc09QDbGgK5rXUZ0c_hNBnMg",
    authDomain: "facebook-clone-b7574.firebaseapp.com",
    projectId: "facebook-clone-b7574",
    storageBucket: "facebook-clone-b7574.appspot.com",
    messagingSenderId: "354473173598",
    appId: "1:354473173598:web:9796fb5a3e978c93460acf",
    measurementId: "G-24JYRRH4HE"
  };

  //connect react frontend with firebase backend
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase database
  const db = firebaseApp.firestore();
  //authentication
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
