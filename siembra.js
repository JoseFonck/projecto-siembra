//buttons y elementos necesarios
const button__back = document.querySelector(".back");
const button_cultivo = document.querySelector(".button_cultivo");
const button_cancelar = document.getElementById("cancel");
const button__reserva = document.getElementById("submit");
const help__img = document.querySelector(".help__img");

const wizard = document.querySelector(".wizard");
const help__message = document.querySelector(".help__reserva");
const confirmacion = document.querySelector(".confirmacion");

let modulos = document.querySelector(".ul");
let cultivos = document.querySelector("#cultivos");

//seleccion
let modulo_seleccionado;
let cultivos__seleccionados = [];

//CONTENEDOR PARA CULTIVOS SELECCIONADOS
let div__cultivos = document.querySelector(".cultivos__seleccionados");

//COMPARAR MOD YA EXISTENTE
let reservas = getReservas();
let mod__existe;

//iniciar con todo oculto
modulos.style.display = "none";
wizard.style.display = "none";
cultivos.style.display = "none";

const array__cultivos = [
  {
    id: "1",
    nombre: "Zanahoria",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis itaque dolorem nam labore amet .",
    image: "/assets/cultivos/tuberculos/zanahoria.jpg",
    familia: "Tuberculos",
  },
  {
    id: "2",
    nombre: "Remolacha",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis itaque dolorem nam labore amet .",
    image: "/assets/cultivos/tuberculos/remolacha.jpg",
    familia: "Tuberculos",
  },
  {
    id: "3",
    nombre: "Batata",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis itaque dolorem nam labore amet .",
    image: "/assets/cultivos/tuberculos/batata.jpeg",
    familia: "Tuberculos",
  },
  {
    id: "4",
    nombre: "Papas",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis itaque dolorem nam labore amet .",
    image: "/assets/cultivos/tuberculos/papa.jpg",
    familia: "Tuberculos",
  },
];

array__cultivos.forEach((cultivo) => {
  cultivos.innerHTML += `
    <div class="cultivo">
      <h3>${cultivo.nombre}</h3>
      <div class="descripcion">
          <img class="image" src=${cultivo.image} alt="">
          <p>${cultivo.descripcion}</p>
          <input class="check"  type="checkbox" name="mycheck" onchange="checkChange(${cultivo.id})">
      </div>
    </div>
    <div class="divisor"></div>`;
});

const checkChange = (id) => {
  const isSelected = cultivos__seleccionados.some(
    (cultivo) => cultivo.id.toString() === id.toString()
  );
  if (isSelected)
    cultivos__seleccionados = cultivos__seleccionados.filter(
      (cultivo) => cultivo.id.toString() !== id.toString()
    );
  else
    cultivos__seleccionados.push(
      array__cultivos.find((cultivo) => cultivo.id.toString() === id.toString())
    );
};

let mod = document.querySelector(".mod");

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

  cultivos.style.display =
    cultivos.style.display === "block" ? "none" : "block";

  div__cultivos.style.display =
    cultivos.style.display === "block" ? "none" : "block";
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

//buttons__validaciones
const message__error = document.querySelector(".message__error");
const button__si = document.getElementById("aceptar");
const button__no = document.getElementById("cancelar");


function asignarModulo(items) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      let modulo = e.currentTarget.textContent;
      mod.textContent = modulo;
      reservas.forEach((reserva) => {
        if (reserva.modulo === mod.textContent) mod__existe = true;
        else mod__existe = false;
        console.log(mod__existe)
      });
      if (mod !== "Modulos") {
        modulos.style.display = "none";
        wizard.style.display = "none";
      }
    });
  });
}

<<<<<<< Updated upstream
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

=======
// let array__cultivos = [];

// for (let i = 0; i < cultivos.children.length; i++) {
//   if (cultivos.children[i].className === "divisor") {

//   } else {
//     array__cultivos.push({
//       nombre: cultivos.children[i].firstElementChild.textContent,
//       descripcion: cultivos.children[i].lastElementChild.textContent.trim(),
//       image: cultivos.children[i].lastElementChild.firstElementChild.src,
//     });
//   }
// }

// for (let i = 0; i < cultivos.children.length; i++) {
//   if (cultivos.children[i].className === "divisor") continue;
//   else {
//     const checkbox = cultivos.children[i].lastElementChild.lastElementChild;
//     // console.log(array__cultivos);
//     checkbox.addEventListener("change", (e) => {
//       e.preventDefault();
//       if (e.target.checked) {
//         cultivos__seleccionados.push(array__cultivos[i]); // GUARDO el objeto seleccionado
//         console.log(cultivos__seleccionados);
//       } else {
//         cultivos__seleccionados = cultivos__seleccionados.filter(
//           (cultivo) => cultivo !== cultivos__seleccionados[i]
//         ); // BORRO LOS CULTIVOS QUE DESELECCIONO
//         console.log(cultivos__seleccionados);
//       }
//     });
//   }
// }
// console.log(cultivos__seleccionados);
>>>>>>> Stashed changes
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
  div__cultivos.innerHTML = array_cultivosHTML || "";
});

button__back.addEventListener("click", () => {
  if (mod__existe === true &&  mod.textContent!== "Modulos" && cultivos__seleccionados.length !== 0){
    wizard.style.display = "block";
    message__error.style.display = "block";
    setTimeout(() => {
      wizard.style.display = "none";
      message__error.style.display = "none";
    }, 1000);
  }
  else {
    saveReservas({
      modulo: mod.textContent,
      cultivos: cultivos__seleccionados,
      estado: "Pendiente de confirmacion",
    });
  }
  // history.back();
});

<<<<<<< Updated upstream
const button__confirmar = document.getElementById("aceptar");
const button__cancelar = document.getElementById("cancelar");
=======

//VALIDACION DE RESERVA
>>>>>>> Stashed changes

button__reserva.addEventListener("click", () => {
  confirmacion.style.display = "block";
  wizard.style.display = "block";
  wizard.style.background = "#00000067";
});

<<<<<<< Updated upstream
button__confirmar.addEventListener("click", () => {
  if (mod.textContent !== "Modulos" && cultivos__seleccionados.length !== 0) {
=======
button__si.addEventListener("click", (e) => {
  e.preventDefault();
  if (mod__existe) {
    confirmacion.style.display = "none";
    message__error.innerHTML = `<h3>El modulo ya se encuentra en uso</h3>`;
    message__error.style.display = "block";
    wizard.style.display = "block";
    setTimeout(() => {
      message__error.style.display = "none";
      wizard.style.display = "none";
    }, 1500);
  } else if (
    mod.textContent === "Modulos" ||
    cultivos__seleccionados.length === 0
  ) {
    confirmacion.style.display = "none";
    message__error.innerHTML =
      "Debe seleccionar un modulo y al menos un cultivo";
    message__error.style.display = "block";
    wizard.style.display = "block";
    setTimeout(() => {
      message__error.style.display = "none";
      wizard.style.display = "none";
    }, 1500);
  } else {
>>>>>>> Stashed changes
    saveReservas({
      modulo: mod.textContent,
      cultivos: cultivos__seleccionados,
      estado: "Pendiente de siembra",
    });
    history.back();
  }
});

<<<<<<< Updated upstream
=======
// button__si.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (mod__existe === true) {
//     confirmacion.style.display = "none";
//     message__error.style.display = "block";
//     message__error.innerHTML = `<h3>El ${mod__existe} ya esta en uso</h3>`;
//     setTimeout(() => {
//       message__error.style.display = "none";
//       wizard.style.display = "none";
//     }, 1500);
//   }
// });

>>>>>>> Stashed changes
button_cancelar.addEventListener("click", () => {
  history.back();
});
