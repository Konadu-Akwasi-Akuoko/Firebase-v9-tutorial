// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUpEGfDS0-0KVT3H0odZx6SOHQ16Nt9vU",
  authDomain: "fir-tutorials-4813c.firebaseapp.com",
  projectId: "fir-tutorials-4813c",
  storageBucket: "fir-tutorials-4813c.appspot.com",
  messagingSenderId: "1076071880723",
  appId: "1:1076071880723:web:cfc8efa3baf0ce12bd87e6",
  measurementId: "G-L317BZHHNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// Collection reference
const colRef = collection(db, "books");
// Collection reference - Add data
// try {
//   console.log("Try2");
//   const docRef = await addDoc(colRef, {
//     author: "Vivian Akuoko",
//     title: "Hello World",
//   });
//   console.log("Document written with the ID of: ", docRef.id);
// } catch (e) {
//   console.log("Error inserting data: ", e);
// }

const citiesRef = collection(db, "cities");

// await setDoc(doc(citiesRef, "SF"), {
//   name: "San Francisco",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 860000,
//   regions: ["west_coast", "norcal"],
// });
// await setDoc(doc(citiesRef, "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
//   capital: false,
//   population: 3900000,
//   regions: ["west_coast", "socal"],
// });
// await setDoc(doc(citiesRef, "DC"), {
//   name: "Washington, D.C.",
//   state: null,
//   country: "USA",
//   capital: true,
//   population: 680000,
//   regions: ["east_coast"],
// });
// await setDoc(doc(citiesRef, "TOK"), {
//   name: "Tokyo",
//   state: null,
//   country: "Japan",
//   capital: true,
//   population: 9000000,
//   regions: ["kanto", "honshu"],
// });
// await setDoc(doc(citiesRef, "BJ"), {
//   name: "Beijing",
//   state: null,
//   country: "China",
//   capital: true,
//   population: 21500000,
//   regions: ["jingjinji", "hebei"],
// });

// Read data
try {
  console.log("Reading data: ");
  const querySnapshot = await getDocs(colRef);
  querySnapshot.forEach((doc) => {
    console.log({ ...doc.data(), id: doc.id });
  });
} catch (e) {
  console.log("Error reading data: ", e);
}
