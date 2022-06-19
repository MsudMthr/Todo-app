import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAo8rM5alKUJBID__UYbhrHevesAfyNG4Q",
  authDomain: "todo-86bbb.firebaseapp.com",
  projectId: "todo-86bbb",
  storageBucket: "todo-86bbb.appspot.com",
  messagingSenderId: "859940865193",
  appId: "1:859940865193:web:451815a39c2ec0f0d8d5b8",
};

const app = initializeApp(config);
const storage = getStorage();
export const auth = getAuth(app);

export const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(auth.currentUser, { photoURL });

  setLoading(false);
};
