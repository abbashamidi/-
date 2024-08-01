// Initialize CKEditor
let editorInstance;
ClassicEditor.create(document.querySelector("#editor"), {})
  .then((editor) => {
    editorInstance = editor; // Assign the editor instance to the variable
    console.log("Editor was initialized", editor);
  })
  .catch((error) => {
    console.error("Error initializing CKEditor:", error);
  });

// Handle button click event
const storeButton = document.getElementById("storeButton");
const editor = document.getElementById("editor");
storeButton.addEventListener("click", () => {
  if (editorInstance) {
    const content = editorInstance.getData(); // Correct method name
    localStorage.setItem("note", content);
    editorInstance.setData("");
    alert("your note got save successfuly");
    history.go(-1);
  } else {
    alert("Editor is not initialized yet.");
  }
});
