const storedString = localStorage.getItem("note");
if (storedString) {
  document.getElementById("output").innerHTML = `<p>${storedString}</p>`;
} else {
  alert("there is not any note");
}
