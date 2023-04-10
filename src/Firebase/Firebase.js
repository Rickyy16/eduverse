import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAj24K7uThfbhNNUo04ND5FpVoVD-1eI3k",
  authDomain: "major-project-clg-81254.firebaseapp.com",
  databaseURL: "https://major-project-clg-81254-default-rtdb.firebaseio.com",
  projectId: "major-project-clg-81254",
  storageBucket: "major-project-clg-81254.appspot.com",
  messagingSenderId: "715215310838",
  appId: "1:715215310838:web:7ef20f9493c105dd2101d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth};

