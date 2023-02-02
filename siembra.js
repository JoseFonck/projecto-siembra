//buttons y elementos necesarios
const button__back = document.querySelector(".back");
const wizard = document.querySelector(".wizard");
const button_cultivo = document.querySelector(".button_cultivo");
const help__message = document.querySelector(".help__reserva");
const help__img = document.querySelector(".help__img");
let modulos = document.querySelector(".ul");
let cultivos = document.querySelector("#cultivos");

//seleccion
let modulo_seleccionado;
let cultivos__seleccionados = [];

//CONTENEDOR PARA CULTIVOS SELECCIONADOS
let div__cultivos = document.querySelector(".cultivos__seleccionados");

//iniciar con todo oculto
modulos.style.display = "none";
wizard.style.display = "none";
cultivos.style.display = "none";

let mod = document.querySelector(".mod");
// console.log(mod)

// desplega los li
mod.addEventListener("click", (e) => {
  e.preventDefault();
  modulos.style.display = "block";
  wizard.style.display = "block";
  const li = document.querySelectorAll(".li");

  asignarModulo(li);
});

//oculta los li
wizard.addEventListener("click", (e) => {
  e.preventDefault();
  modulos.style.display = "none";
  wizard.style.display = "none";
});

button_cultivo.addEventListener("click", (e) => {
  e.preventDefault();
  // let ul = document.querySelector("#cultivos");

  cultivos.style.display =
    cultivos.style.display === "block" ? "none" : "block";

  div__cultivos.style.display =
    cultivos.style.display === "block" ? "none" : "block";

  //   wizard.style.display = "block";
  //   wizard.style.background = "none";
  // asignarCultivos(cultivos);
});

wizard.addEventListener("click", (e) => {
  e.preventDefault();
  cultivos.style.display = "none";
  wizard.style.display = "none";
  help__message.style.display = "none";
  wizard.style.background = "none";
});

help__img.addEventListener("click", () => {
  help__message.style.display = "block";
  wizard.style.display = "block";
  wizard.style.background = "#00000067";
});

button__back.addEventListener("click", () => {
  history.back();
});

function asignarModulo(items) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      let modulo = e.currentTarget.textContent;

      mod.textContent = modulo;
      if (mod != "Modulos") {
        modulos.style.display = "none";
        wizard.style.display = "none";
        cargarReserva(mod);
      }
    });
  });
}

// function asignarCultivos(){
console.log(cultivos.children);
for (let i = 0; i < cultivos.children.length; i++) {
  if (cultivos.children[i].className === "divisor") continue;

  const checkbox = cultivos.children[i].lastElementChild.lastElementChild;
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      const cultivo = cultivos.children[i].firstElementChild.textContent; //OBTIENE NOMBRE DEL CULTIVO SELECCIONADO

      cultivos__seleccionados.push(cultivo); // GUARDO ARRAY CON NOMBRES DE LOS CULTIVOS SELECCIONADOS
      console.log(cultivos__seleccionados);
    } else {
      cultivos__seleccionados = cultivos__seleccionados.filter(
        (cultivo) =>
          cultivo !== cultivos.children[i].firstElementChild.textContent
      ); // BORRO LOS NOMBRES DE LOS CULTIVOS QUE DESELECCIONO
      //   console.log(cultivos__seleccionados);
    }
  });
}

button_cultivo.addEventListener("click", () => {
  // const mostrarCultivosSeleccionados = (cultivos) => {
  let array_cultivosHTML = "";
  for (let i = 0; i < cultivos__seleccionados.length; i++) {
    let new__cultivoHTML = `<div class="container__cultivo">
                              <h3 class="text__cultivo">${cultivos__seleccionados[i]}</h3>
                              <img src="assets/borrar.png" alt="">
                            </div>`;
    array_cultivosHTML += new__cultivoHTML;
  }
  // div__cultivos.innerHTML = pepe ? pepe : ''
  div__cultivos.innerHTML = array_cultivosHTML || "";
  //   div__cultivos.style.display = "block"
  //   cultivos.style.display = "none";

  // };
});
// }


const button__reserva = document.getElementById("submit");

button__reserva.addEventListener("click", () => {
  //   let reserva = cargarReserva();
  saveReservas({
    modulo: mod.textContent,
    cultivos: cultivos__seleccionados,
    estado: "reservado/pendiente de siembra",
  });
  // localStorage.setItem("reservas__cultivos",JSON.stringify(reserva));
  history.back();
});


