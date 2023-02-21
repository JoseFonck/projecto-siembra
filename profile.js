const container = document.querySelector(".data_container");

const fullname = document.querySelector(".fullname");




var userLogged = getUserLogged(); //lo pasa a array

console.log(userLogged)
console.log(userLogged.nombre);




const nombre = document.querySelector(".nombre");
const ape = document.querySelector(".apellido");
const depto = document.querySelector(".depto");
const email = document.querySelector(".email");
const back = document.querySelector(".back")

namee = userLogged.nombre[0].toUpperCase() + userLogged.nombre.slice(1);
apellido = userLogged.apellido[0].toUpperCase() + userLogged.apellido.slice(1);
depart = userLogged.depto[0].toUpperCase() + userLogged.depto.slice(1);
correo = userLogged.email[0].toUpperCase() + userLogged.email.slice(1);

fullname.textContent = `${namee} ${apellido}`


depto.innerText = `Departamento: ${depart}.`;
email.innerText = `Email: ${correo}.`;


back.addEventListener("click", ()=>{
    location.href = "/home.html"
})

