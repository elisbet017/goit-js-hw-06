const form = document.querySelector(".login-form");

const refs = {
  email: document.querySelector('[name="email"]'),
  password: document.querySelector('[name="password"]'),
};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.email.value === "" || refs.password.value === "") {
    alert("Всі поля мають бути заповненими.");
  }

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}
