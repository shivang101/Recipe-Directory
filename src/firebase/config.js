import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3KwjG4WLbsul3n4wm2sYWVKrrqhaRZTc",
  authDomain: "recipes-c670e.firebaseapp.com",
  projectId: "recipes-c670e",
  storageBucket: "recipes-c670e.appspot.com",
  messagingSenderId: "683871439115",
  appId: "1:683871439115:web:44774a5ec0d4dd85ac7a0e",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//(init)||initialize services

const projectFirestore = firebase.firestore();

export { projectFirestore };
