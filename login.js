


const usuarios = getUsers()

// inputs
const email = document.querySelector("#email_input");
const password = document.querySelector("#pass_input");

// const submitCuenta = document.querySelector("")

// console.log(email.value)

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
  const passValue = password.value

  let hasError = false

  if (!emailValue) {
    emailContainer.classList.add("input_error")
    messageErrorMail.textContent = "Ingrese el email"
    hasError = true
    // return;
  }
  
  if (emailValue && (!emailValue.includes("@") || !emailValue.includes(".com"))) {
    emailContainer.classList.add("input_error")
    messageErrorMail.textContent = "Formato invalido"
    hasError = true
    // return;
  }
  

  if (!passValue) {
    passContainer.classList.add("input_error")
    messageErrorPass.textContent = "Ingrese contraseña"
    hasError = true
    // return;
  }
  
  const userLogged = usuarios.find( user => user.email === emailValue);

  if (!userLogged) {
    emailContainer.classList.add("input_error");
    messageErrorMail.textContent = "Email ingresado no esta registrado";
  }
  
  if (userLogged.password !== passValue) {
    passContainer.classList.add("input_error")
    messageErrorPass.innerHTML = "Contraseña incorrecta"
    hasError = true
    // return
  }

  if (hasError) return

  localStorage.setItem("userLogged", JSON.stringify(userLogged))

  window.location.href = "home.html"
});


const removeErrors = () => {
  messageErrorMail.textContent = ""
  messageErrorPass.textContent = ""
};


email.addEventListener('focus', () => {
  emailContainer.classList.remove("input_error")
  removeErrors()
})

password.addEventListener('focus', () => {
  passContainer.classList.remove("input_error")
  removeErrors()
})


