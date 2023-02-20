const container__mod = document.querySelector(".container-mod");
const fragmento = document.createDocumentFragment();
const container__buttonAdd = document.querySelector(".container__buttonAdd");

const button_add = document.querySelector(".button_add");

let reservas = getReservas();

//Quita msg de que no existen modulos si se carga un modulo en reservas
if(reservas.length === 0) container__mod.firstElementChild.textContent = "No hay módulos asignados";
else container__mod.firstElementChild.textContent = ""; 

//Agg modulos del array de reserva
reservas.forEach((reserva) => {
  const module = document.createElement("div");
//   console.log(module)
  module.className = "module";
  module.innerHTML = `<div><h3>${reserva.modulo}</h3>
    <span>Cultivos: <br> ${reserva.cultivos}</span></div>
    <strong>${reserva.estado}</strong>`;
  fragmento.appendChild(module);
});

//Agrega el fragmento con los modulos ANTES del conteiner del button
container__mod.insertBefore(fragmento,container__buttonAdd);
      
//Redirecciona al slide de reserva/siembra
button_add.addEventListener("click", () => {
  location.href = "siembra.html";
});

const notificacion = document.querySelector(".notificacion");
const button__si__reserva = document.querySelector("#button__si");
const button__no__reserva = document.querySelector("#button__no");

// console.log(notificacion)
let ban = JSON.parse(localStorage.getItem("notificacion"));

if (!ban) {
  setTimeout(() => {
    notificacion.style.display = "block";
  }, 2000);
  localStorage.setItem("notificacion", true);
}

button__si__reserva.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/siembra.html";
  notificacion.style.display = "none";
});

button__no__reserva.addEventListener("click", (e) => {
  e.preventDefault();
  notificacion.style.display = "none";
});

modulos.forEach((mod) => {
  mod.addEventListener("click", (e) => {
    let id__mod =
      e.currentTarget.firstElementChild.firstElementChild.textContent;
    console.log(id__mod);
    reservas.forEach((reserva) => {
      let len = reserva.cultivos.length.toString();
      console.log(len)
      if (
        id__mod === reserva.modulo &&
        reserva.estado === "Pendiente de siembra"
      )
      { (len === "1")  ? modalInfo1Culti(reserva, modal) : modalInfo2Culti(reserva, modal);
      }
      if (
        id__mod === reserva.modulo &&
        reserva.estado === "Pendiente de confirmacion"
      )
      { (len === "1")  ? modalCompleta1Culti(reserva, modal) : modalCompleta2Culti(reserva, modal);
      }

      // else modalSiembra(reserva);
    })
  });
});

//MOSTRAR MODALES

const modal = document.querySelector(".container_modal");
const boton_modal = modal.lastElementChild;

function modalCompleta1Culti(res,modal) {
  modal.innerHTML = `<div class="container__img__modal">
                          <img src="${res.cultivos[0].image}" alt="">
                    </div>
                    <div class="descripcion_modal">
                          <h3>${res.modulo}</h3>
                          <h3>Familia: Tuberculos</h3>
                          <h3>Cultivos: ${res.cultivos.map((c) => c.nombre).join("/")}</h3>
                          <h3>Temperatura Actual: 20C</h3>
                          <h3>Humedad Actual: 60%</h3>
                          <h3>Descripcion: ${res.descripcion}</h3>
                    </div>
                    <div class="containerButtons">
                          <button>Reservar</button>
                          <button>Cancelar</button>
                    </div>`;        
      
modal.style.display = "block";
modal.lastElementChild.firstElementChild.addEventListener("click", () => {
modal.style.display = "none";
});
modal.lastElementChild.lastElementChild.addEventListener("click", () => {
  deleteReserva(reservas,res)
})
// .addEventListener("click", deleteReserva(res))

}

function deleteReserva(reservas,res){
  console.log(reservas)
  console.log(res.modulo)
  console.log(reservas.forEach((r) => r.modulo === res.modulo))
}


function modalCompleta2Culti(res,modal) {
  modal.innerHTML = `<div class="container__img__modal">
                          <img src="${res.cultivos[0].image}" alt="">
                          <img src="${res.cultivos[1].image}" alt="">
                    </div>
                    <div class="descripcion_modal">
                          <h3>${res.modulo}</h3>
                          <h3>Familia: Tuberculos</h3>
                          <h3>Cultivos: ${res.cultivos.map((c) => c.nombre).join("/")}</h3>
                          <h3>Temperatura Actual: 20C</h3>
                          <h3>Humedad Actual: 60%</h3>
                          <h3>Descripcion: ${res.descripcion}</h3>
                    </div>
                    <div class="containerButtons">
                          <button>Reservar</button>
                          <button>Cancelar</button>
                    </div>`;       
console.log(res.cultivos.map((c) => c.image))        
modal.style.display = "block";
modal.lastElementChild.firstElementChild.addEventListener("click", () => {
modal.style.display = "none";
});
modal.lastElementChild.lastElementChild.addEventListener("click", () => {
  deleteReserva(reservas,res)
})
}

function modalSiembra(r) {
  // modal.innerHTML = `<div class="container__img__modal">
  //                             <img src="/assets/cultivos/tuberculos/zanahoria.jpg" alt="">
  //                   </div>
  //                   <div class="descripcion_modal">
  //                             <h3>Nro de modulo: 1</h3>
  //                             <h3>Familia: Tuberculos</h3>
  //                             <h3>Cultivos: Zanahoria</h3>
  //                             <h3>Temperatura Actual: 20C</h3>
  //                             <h3>Humedad Actual: 60%</h3>
  //                             <h3>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil officia dicta voluptatem natus. Officiis adipisci qui impedit facilis magni, delectus harum nulla? Sint cupiditate sunt asperiores velit dicta deserunt!</h3>
  //                   </div>
  //                   <div class="containerButtons">
  //                             <button>Aceptar</button>

  //                 </div>`;
  console.log("Esta pendiente de siembra");
}

function modalInfo1Culti(res,modal){
    console.log(res)
    modal.innerHTML = `<div class="container__img__modal">
                                <img src="${res.cultivos[0].image}" alt="">
                      </div>
                      <div class="descripcion_modal">
                                <h3>${res.modulo}</h3>
                                <h3>Familia: Tuberculos</h3>
                                <h3>Cultivos: ${res.cultivos.map((c) => c.nombre).join("/")}</h3>
                                <h3>Temperatura Actual: 20C</h3>
                                <h3>Humedad Actual: 60%</h3>
                                <h3>Descripcion: ${res.descripcion}</h3>
                      </div>
                      <div class="containerButtons">
                                <button>Aceptar</button>
                    </div>`;        
      console.log(res.cultivos.map((c) => c.image))        
      modal.style.display = "block";
      modal.lastElementChild.firstElementChild.addEventListener("click", () => {
      modal.style.display = "none";
    });
}

function modalInfo2Culti(res,modal) {
  console.log(res)
  modal.innerHTML = `<div class="container__img__modal">
                              <img src="${res.cultivos[0].image}" alt="">
                              <img src="${res.cultivos[1].image}" alt="">
                    </div>
                    <div class="descripcion_modal">
                              <h3>${res.modulo}</h3>
                              <h3>Familia: Tuberculos</h3>
                              <h3>Cultivos: ${res.cultivos.map((c) => c.nombre).join("/")}</h3>
                              <h3>Temperatura Actual: 20C</h3>
                              <h3>Humedad Actual: 60%</h3>
                              <h3>Descripcion: ${res.descripcion}</h3>
                    </div>
                    <div class="containerButtons">
                              <button>Aceptar</button>
                  </div>`;        
    console.log(res.cultivos.map((c) => c.image))        
    modal.style.display = "block";
    modal.lastElementChild.firstElementChild.addEventListener("click", () => {
    modal.style.display = "none";
  });
}





