import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtdjcjD02ldXaJZrxbWrzX6uf0kWjvyL4",
  authDomain: "scoreboard-d687d.firebaseapp.com",
  projectId: "scoreboard-d687d",
  storageBucket: "scoreboard-d687d.appspot.com",
  messagingSenderId: "421445358054",
  appId: "1:421445358054:web:a0c24bb60d2de199f18627",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
