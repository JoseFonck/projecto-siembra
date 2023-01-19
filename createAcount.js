// inputs

// const form = document.querySelector(".form");
const nom = document.querySelector("#name_input");
const lastname = document.querySelector("#lastname_input");
const depto = document.querySelector("#depto_input");
const email = document.querySelector("#email_input");
const pass = document.querySelector("#pass_input");
const repeatPass = document.querySelector("#repeatPass_input");


// const users_json = localStorage.getItem("users"); // dev el json de users
// var base_datos = JSON.parse(users_json); //lo pasa a array



const validaCampos = () => {
  const valor_name = nom.value.trim();
  const valor_lastname = lastname.value.trim();
  const valor_depto = depto.value.trim();
  const valor_email = email.value.trim();
  const valor_pass = pass.value.trim();
  const valor_repeatpass = repeatPass.value.trim();

  let error = false;

  //valida nombre
  if (!valor_name) {
      validaFalla(nom, "Ingrese el nombre");
      error = true;
    } else {
    validaOk(nom);
    error = false;
  }

  //valida apellido
  if (!valor_lastname) {
    validaFalla(lastname, "Ingrese el apellido");
    error = true;
  } else {
    validaOk(lastname);
    error = false;
  }

  //valida depto
  if (!valor_depto) {
    validaFalla(depto, "Ingrese piso y departamento Ej: (2C)");
    error = true;
  } else {
    validaOk(depto);
    error = false;
  }

  //valida email
  if (!valor_email) {
    validaFalla(email, "Ingrese un correo electronico");
    error = true;
  } else if (!validaEmail(valor_email)) {
    validaFalla(email, "El email no es válido");
    error = true;
  } else {
    validaOk(email);
    error = false;
  }

  //valida pass
  if (!valor_pass) {
    validaFalla(pass, "Ingrese una contraseña");
    error = true;
  } else if (valor_pass.length < 8) {
    validaFalla(pass, "La contraseña debe contener al menos 8 caracteres");
    error = true;
  } else {
    validaOk(pass);
    error = false;
  }

  if (!valor_repeatpass) {
    validaFalla(repeatPass, "Ingrese una contraseña");
    error = true;
  } else if (!(valor_pass == valor_repeatpass)) {
    validaFalla(repeatPass, "Las contraseñas no coinciden");
    error = true;
  } else {
    validaOk(repeatPass);
    error = false;
  }

  if(!error){
    // nuevo = new Users(valor_name,valor_lastname,valor_depto,valor_email,valor_repeatpass);
    const nuevo = {
      nombre: valor_name,
      apellido: valor_lastname,
      depto: valor_depto,
      email: valor_email,
      password: valor_pass
    }
    
    saveUser(nuevo)
    // cargar(nuevo);
    return error;
  }
};

//submit button
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  error = validaCampos(); 
  if(error == false){
    window.location.href = 'login.html'
  }
});

const cargar = (nuevo) => {
    localStorage.setItem("users",JSON.stringify(nuevo));
}

const validaFalla = (input, msg) => {
  const container_input = input.parentElement;
  container_input.classList.add("input_error");
  const message = container_input.nextElementSibling; //me lleva al siguiente hermano
  message.innerText = msg;
};

const validaEmail = (email) => {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
};

const validaOk = (input) => {
  const container_input = input.parentElement;
  container_input.classList.remove("input_error");
  const message = container_input.nextElementSibling;
  message.innerHTML = "";
};

