let editor = document.querySelector(".editor");
let textareaEditor = document.querySelector(".textarea");

window.addEventListener('keydown', function(event) {
  if(event.code == 'KeyE' && event.ctrlKey) {
    event.preventDefault();
    document.querySelector(".textarea").style.visibility = "visible";
  }
});


window.addEventListener('keydown', function(event) {
  if(event.code == 'KeyS' && event.ctrlKey) {
    event.preventDefault();
    editor.innerText = textareaEditor.value;
    textareaEditor.style.display = "none";
  }
});




