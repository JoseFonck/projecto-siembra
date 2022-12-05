const users = [
  {
    email: "jose@piola.com",
    password: "12345678"
  },
  {
    email: "lucas@piola.com",
    password: "12345687"
  },
];

// inputs
const email = document.querySelector("#email_input");
const pass = document.querySelector("#pass_input");

// inputs containers
const emailContainer = document.querySelector("#container_email");
const passContainer = document.querySelector("#container_pass");

//error messages
const messageErrorMail = document.querySelector(".error_message_email")
const messageErrorPass = document.querySelector(".error_message_pass")

//submit button
const button = document.querySelector(".button");

button.addEventListener('click', e => {
  // console.log(email.value)
  e.preventDefault();
  const emailValue = email.value
  const passValue = pass.value

  let hasError = false

  if (!emailValue) {
    emailContainer.classList.add("input_error")
    messageErrorMail.innerHTML = "Ingrese el email"
    hasError = true
    // return;
  }
  
  if (emailValue && (!emailValue.includes("@") || !emailValue.includes(".com"))) {
    emailContainer.classList.add("input_error")
    messageErrorMail.innerHTML = "Formato invalido"
    hasError = true
    // return;
  }
  
  console.log(passValue)

  if (!passValue) {
    passContainer.classList.add("input_error")
    messageErrorPass.innerHTML = "Ingrese contraseña"
    hasError = true
    // return;
  }
  
  const userLogged = users.find( user => user.email === emailValue);
  
  if (!userLogged) {
    emailContainer.classList.add("input_error")
    passContainer.classList.add("input_error")
    hasError = true
    // return;
  }
  
  if (userLogged && userLogged.password !== passValue) {
    passContainer.classList.add("input_error")
    messageErrorPass.innerHTML = "Contraseña incorrecta"
    hasError = true
    // return
  }

  if (hasError) return

  window.location.href = "home.html"
});


const removeErrors = () => {
  messageErrorMail.innerHTML = ""
  messageErrorPass.innerHTML = ""
};


email.addEventListener('focus', () => {
  emailContainer.classList.remove("input_error")
  removeErrors()
})

pass.addEventListener('focus', () => {
  passContainer.classList.remove("input_error")
  removeErrors()
})


