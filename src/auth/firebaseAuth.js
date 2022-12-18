import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
