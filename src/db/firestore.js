import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUpEGfDS0-0KVT3H0odZx6SOHQ16Nt9vU",
  authDomain: "fir-tutorials-4813c.firebaseapp.com",
  projectId: "fir-tutorials-4813c",
  storageBucket: "fir-tutorials-4813c.appspot.com",
  messagingSenderId: "1076071880723",
  appId: "1:1076071880723:web:cfc8efa3baf0ce12bd87e6",
  measurementId: "G-L317BZHHNY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = collection(db, "books");
const deleteDocRef = (id) => doc(db, "books", id);

// Getting documents from the firestore (Not real time)
export const getDocuments = async () => {
  console.log("Getting documents");
  const docSnap = await getDocs(docRef);
  docSnap.forEach((doc) => {
    let docs = [];
    docs.push({ data: doc.data(), id: doc.id });
  });
  console.log(docs);
};

// Listening to get real time updates => onSnapshot
export const getRealTimeUpdates = () => {
  const unsubscribe = onSnapshot(
    docRef,
    (snapshot) => {
      let realTimeDocs = [];
      snapshot.docs.forEach((doc) => {
        realTimeDocs.push({ data: doc.data(), id: doc.id });
      });
      console.log(realTimeDocs);
    },
    (error) => console.log("Listener failed: ", error)
  );
};

// Add to document
export const addToDocument = async (title, author) => {
  try {
    const docToAdd = await addDoc(docRef, {
      author: author,
      title: title,
    });
    console.log("Added to the collection with the ID of: ", docToAdd.id);
  } catch (e) {
    console.log("Error: ", e);
  }
};

// Delete from document
export const deleteFromDocument = async (id) => {
  try {
    await deleteDoc(deleteDocRef(id));
  } catch (e) {
    console.error("Error deleting data: ", e);
  }
};

// Delete from document with field(author)
export const deleteWithField = async (author) => {
  try {
    console.log("Snapshot running");
    // Create a query
    const q = query(docRef, where("author", "==", author));
    // Get the value of the query with getDocs
    const querySnapshot = await getDocs(q);
    // Cycle through the snapshot and delete any matching data
    querySnapshot.forEach(async (doc) => {
      console.log("Deleting these data: ", doc.data());
      await deleteDoc(deleteDocRef(doc.id));
    });
  } catch (e) {
    console.log("Couldn't delete data: ", e);
  }
};
