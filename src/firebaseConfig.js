import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUpEGfDS0-0KVT3H0odZx6SOHQ16Nt9vU",
  authDomain: "fir-tutorials-4813c.firebaseapp.com",
  projectId: "fir-tutorials-4813c",
  storageBucket: "fir-tutorials-4813c.appspot.com",
  messagingSenderId: "1076071880723",
  appId: "1:1076071880723:web:cfc8efa3baf0ce12bd87e6",
  measurementId: "G-L317BZHHNY",
};

const firebaseApp = () => initializeApp(firebaseConfig);

export default firebaseApp;
