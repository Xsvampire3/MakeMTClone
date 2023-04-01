import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiQK5GNahz2aQW2Up2YSi04C1cTgM4f5g",
  authDomain: "makemytrip2-516b3.firebaseapp.com",
  projectId: "makemytrip2-516b3",
  storageBucket: "makemytrip2-516b3.appspot.com",
  messagingSenderId: "888805138935",
  appId: "1:888805138935:web:de5b21d70ea51a70c10ef2",
  measurementId: "G-SGB5XY4EHF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
