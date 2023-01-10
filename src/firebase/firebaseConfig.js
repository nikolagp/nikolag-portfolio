import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_aTHzwza-L4XdF6gPxhB3VyxI46bHEU0",
  authDomain: "portfolio-nikolag.firebaseapp.com",
  projectId: "portfolio-nikolag",
  storageBucket: "portfolio-nikolag.appspot.com",
  messagingSenderId: "1012682829347",
  appId: "1:1012682829347:web:afc22434aa9935c8858b96",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
