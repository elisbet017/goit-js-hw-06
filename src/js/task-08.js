const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    return alert("Всі поля мають бути заповненими.");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.target.reset();
}
