import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

/*import { seedDatabase } from "../seed";*/

const config = {
  apiKey: "AIzaSyBlolzmCIXyMF-7hjOyunqLTY_HBTS6oSk",
  authDomain: "netflix-clone-6054a.firebaseapp.com",
  projectId: "netflix-clone-6054a",
  storageBucket: "netflix-clone-6054a.appspot.com",
  messagingSenderId: "684937834531",
  appId: "1:684937834531:web:1af0838412b3bbb4ba8196",
};

export const firebase = Firebase.initializeApp(config);

/*seedDatabase(firebase);*/ // call it only once
