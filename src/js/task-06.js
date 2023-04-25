const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", onInputCheck);

function changeClass(add, remove) {
  textInputRef.classList.add(add);
  textInputRef.classList.remove(remove);
}

function onInputCheck(event) {
  if (
    event.target.value.length ===
    Number(textInputRef.getAttribute("data-length"))
  ) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }
}
