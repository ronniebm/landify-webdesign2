
let buttonEdit = document.querySelector('.js-edit');


document.addEventListener ("keydown", function (event) {
  if (event.ctrlKey  &&  event.key === "k") { // === case sensitive.
      buttonEdit.style.display = 'block';
      activateTextEditing(true);
  }
});

buttonEdit.addEventListener('click', (e)=>{
  buttonEdit.style.display = 'none';
  activateTextEditing(false);
})

// function: it turns all text into editable. ------------------
function activateTextEditing(editable) {
  document.querySelectorAll('.js-edit-item').forEach((obj) => {
    obj.contentEditable = editable;
  })
}
// -------------------------------------------------------------