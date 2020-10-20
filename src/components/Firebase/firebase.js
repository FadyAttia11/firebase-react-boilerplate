import app from 'firebase/app';
import 'firebase/auth';

const devConfig = {
    apiKey: "AIzaSyCQe8fhmdb4qNLw1qYAtK7FymVQ_B7e1_c",
    authDomain: "shopping-dev-a6ea9.firebaseapp.com",
    databaseURL: "https://shopping-dev-a6ea9.firebaseio.com",
    projectId: "shopping-dev-a6ea9",
    storageBucket: "shopping-dev-a6ea9.appspot.com",
    messagingSenderId: "742696899791",
    appId: "1:742696899791:web:db9ba6b466c340415853ba"
};

class Firebase {
  constructor() {
    app.initializeApp(devConfig);

    this.auth = app.auth();
  }


  // *** Auth API *** ==> we use 5 Authentication methods
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
   
export default Firebase;