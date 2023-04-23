const textInputRef = document.querySelector("#validation-input");

textInputRef.addEventListener("blur", onInputCheck);

function onInputCheck(event) {
  if (
    event.target.value.length === Number(textInputRef.getAttribute("data-length"))
  ) {
    textInputRef.classList.add("valid");
    textInputRef.classList.remove("invalid");

  } else {
    textInputRef.classList.add("invalid");
  }
}

