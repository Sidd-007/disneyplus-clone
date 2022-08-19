import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCtS0CSSlmgj2cVaHW-FNsqBWRLfPmLU6A",
  authDomain: "disney-plus-clone-4f453.firebaseapp.com",
  projectId: "disney-plus-clone-4f453",
  storageBucket: "disney-plus-clone-4f453.appspot.com",
  messagingSenderId: "691957168687",
  appId: "1:691957168687:web:ae24c482c2f9f940fce4da"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, storage };
export default db;