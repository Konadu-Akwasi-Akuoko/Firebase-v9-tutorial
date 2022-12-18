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
