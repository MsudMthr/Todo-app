import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAo8rM5alKUJBID__UYbhrHevesAfyNG4Q",
  authDomain: "todo-86bbb.firebaseapp.com",
  projectId: "todo-86bbb",
  storageBucket: "todo-86bbb.appspot.com",
  messagingSenderId: "859940865193",
  appId: "1:859940865193:web:451815a39c2ec0f0d8d5b8",
};

const app = initializeApp(config);
export const auth = getAuth(app);
