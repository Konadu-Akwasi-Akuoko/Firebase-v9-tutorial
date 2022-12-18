const { async } = require("@firebase/util");
const { signUpNewUser } = require("./auth/firebaseAuth");
const {
  addToDocument,
  deleteFromDocument,
  deleteWithField,
  getRealTimeUpdates,
  updateDocument,
} = require("./db/firestore");

// getDocuments();
// Get realtime update
getRealTimeUpdates();

const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Add Clicked");
  await addToDocument(addBookForm.title.value, addBookForm.author.value);
  addBookForm.reset();
});

const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Delete clicked");
  await deleteFromDocument(deleteBookForm.id.value);
  deleteBookForm.reset();
});

const deleteBookFieldForm = document.querySelector(".deleteField");
deleteBookFieldForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Delete field clicked");
  await deleteWithField(deleteBookFieldForm.author.value);
  deleteBookFieldForm.reset();
});

const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await updateDocument(updateBookForm.id.value);
  updateBookForm.reset();
});

// Firebase auth
const signupUserForm = document.querySelector(".signup");
signupUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupUserForm.email.value;
  const password = signupUserForm.password.value;
  await signUpNewUser(email, password);
  signupUserForm.reset();
});
