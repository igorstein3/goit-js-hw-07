'use strict';
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
    const data = {};
    data.email = form.elements.email.value.trim();
    data.password = form.elements.password.value.trim();
  
  if ( data.email === "" || data.password === "") {
    return window.alert("All form fields must be filled in");
  }
  console.log(data);
  form.reset();
}
