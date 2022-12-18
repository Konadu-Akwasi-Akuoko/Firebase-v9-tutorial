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
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);
const docRef = collection(db, "books");
const docRefDoc = (id) => doc(db, "books", id);

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
  const q = query(docRef, orderBy("createdAt"));
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      let realTimeDocs = [];
      snapshot.docs.forEach((doc) => {
        realTimeDocs.push({ ...doc.data(), id: doc.id });
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
      createdAt: serverTimestamp(),
    });
    console.log("Added to the collection with the ID of: ", docToAdd.id);
  } catch (e) {
    console.log("Error: ", e);
  }
};

// Delete from document
export const deleteFromDocument = async (id) => {
  try {
    await deleteDoc(docRefDoc(id));
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
      await deleteDoc(docRefDoc(doc.id));
    });
  } catch (e) {
    console.log("Couldn't delete data: ", e);
  }
};

// Updating a document
export const updateDocument = async (id) => {
  await updateDoc(docRefDoc(id), { title: "updated title" });
};
