import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebaseConfig";
import { async } from "@firebase/util";

const auth = getAuth(app);

export const signUpNewUser = async (email, password) => {
  try {
    const createCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(createCredentials.user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, " ", errorMessage);
  }
};

export const signInUser = async (email, password) => {
  try {
    const signIn = await signInWithEmailAndPassword(auth, email, password);
    console.log(signIn.user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, " ", errorMessage);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out: ");
  } catch (error) {
    console.log(error);
  }
};
