const container__mod = document.querySelector(".container-mod");
const fragmento = document.createDocumentFragment();
const container__buttonAdd = document.querySelector(".container__buttonAdd");

const button_add = document.querySelector(".button_add");

let reservas = getReservas();
//Quita msg de que no existen modulos si se carga un modulo en reservas
if (reservas.length === 0)
  container__mod.firstElementChild.textContent = "No hay módulos asignados";
else container__mod.firstElementChild.textContent = "";

const modulos = [];

//Agg modulos del array de reserva
reservas.forEach((reserva) => {
  const module = document.createElement("div");

  module.className = "module";
  module.innerHTML = `<div><h3>${reserva.modulo}</h3>
    <span>Cultivos: <br>${reserva.cultivos
      .map((c) => c.nombre)
      .join(", ")}</span></div> 
    <strong>${reserva.estado}</strong>`; //map, mapea con la condicion dada y dev un nuevo array. JOIN une los elementos
  fragmento.appendChild(module);
  modulos.push(module);
});
//Agrega el fragmento con los modulos ANTES del conteiner del button
container__mod.insertBefore(fragmento, container__buttonAdd);

//Redirecciona al slide de reserva/siembra
button_add.addEventListener("click", () => {
  location.href = "siembra.html";
});


// PARA NOTIFICACIONES

                    // const notificacion = document.querySelector(".notificacion");
                    // const button__si__reserva = document.querySelector("#button__si");
                    // const button__no__reserva = document.querySelector("#button__no");

                    // console.log(notificacion)
                    // let ban = JSON.parse(localStorage.getItem("notificacion"));

                    // if (!ban) {
                    //   setTimeout(() => {
                    //     notificacion.style.display = "block";
                    //   }, 2000);
                    //   localStorage.setItem("notificacion", true);
                    // }

// button__si__reserva.addEventListener("click", (e) => {
//   e.preventDefault();
//   location.href = "/siembra.html";
//   notificacion.style.display = "none";
// });

// button__no__reserva.addEventListener("click", (e) => {
//   e.preventDefault();
//   notificacion.style.display = "none";
// });

modulos.forEach((mod) => {
  mod.addEventListener("click", (e) => {
    let id__mod = e.currentTarget.firstElementChild.firstElementChild.textContent;

    reservas.forEach((reserva) => {
      if (
        id__mod === reserva.modulo &&
        reserva.estado === "Pendiente de siembra"
    ) modalPendienteSiembra(reserva, modal);

      if (
        id__mod === reserva.modulo &&
        reserva.estado === "Pendiente de confirmacion"
      ) modalConfirmacionSiembra(reserva, modal)
      else if (id__mod === reserva.modulo && reserva.estado === "Sembrado") modalSembrado(reserva,modal);
    })
  });
});

//NOTIFICACION SIEMBRA FAMILIA
const button__notificacion = document.querySelector("#button__notificacion");


button__notificacion.addEventListener("click" , () =>{
  location.href = "/notificaciones.html"
})


//MOSTRAR MODALES

const modal = document.querySelector(".container_modal");
const boton_modal = modal.lastElementChild;


function deleteReserva(res) {
  console.log(reservas)
  console.log(res.modulo)
  console.log(reservas.forEach((r) => r.modulo === res.modulo))
}

function modalConfirmacionSiembra(res, modal) {
  modal.innerHTML = `
                    <div class="descripcion_modal">

                          <h2>${res.modulo}</h2>

                          <span><b>Familia:</b> Tuberculos</span>

                          <span><b>Cultivos:</b></span>
                          ${res.cultivos.map(c => `
                              <h4>${c.nombre}</h4>
                              <div class="div__cultivo">
                                  <img class="img__modal" src=${c.image}>
                                  <p>${c.descripcion}</p>
                              </div>
                              `).join(' ')

    }
                          <span><b>Temperatura Actual:</b> 20C</span>
                          <span><b>Humedad Actual:</b> 60%</span>

                    </div>
                    <div class="containerButtons">
                          <button id="button__reservar">Reservar</button>
                          <button id="button__cancelar">Cancelar</button>
                    </div>`;
  console.log(res.cultivos.map((c) => c.image))
  modal.style.display = "block";
  document.querySelector("#button__reservar").addEventListener("click", () => {
    res.estado = "Pendiente de siembra";
    localStorage.setItem("reservas__cultivos", JSON.stringify(reservas.map( r => r.modulo === res.modulo ? res : r)))  
    location.reload()
  });
  document.querySelector("#button__cancelar").addEventListener("click", () => {
    deleteReserva(res)
    modal.style.display = "none";
  })
}

function modalSembrado(res,modal) {
  modal.innerHTML = `
                    <div class="descripcion_modal">

                          <h2>${res.modulo}</h2>

                          <span><b>Familia:</b> Tuberculos</span>

                          <span><b>Cultivos:</b></span>
                          ${res.cultivos.map(c => `
                              <h4>${c.nombre}</h4>
                              <div class="div__cultivo">
                                  <img class="img__modal" src=${c.image}>
                                  <p>${c.descripcion}</p>
                              </div>
                              `).join(' ')

    }
                          <span><b>Temperatura Actual:</b> 20C</span>
                          <span><b>Humedad Actual:</b> 60%</span>
                          <span>
                              <b>Estado</b>: ${res.estado}
                              </select>
                          </span>
                          <span> <b>Fecha siembra: </b>${res.fecha_siembra}</span>
                    </div>`;
  modal.innerHTML += `<button id="boton_cerrar">Aceptar</button>`
  console.log(modal)
  wizard.style.display = "block";
  modal.style.display = "block";
  document.querySelector("#boton_cerrar").addEventListener("click", ()=>{
    wizard.style.display = "none";
    modal.style.display = "none";
  })
}

const cambioSembrado = (e) => {
  const select = document.querySelector('#select_estado');
  const fecha = document.querySelector('#campo_fecha_siembra');
  const fecha_siembra = document.querySelector("#fecha_siembra");

  if (select.value === 'Sembrado') {
    console.log(fecha_siembra)
    fecha_siembra.value = new Date().toISOString().split('T')[0]
    fecha.classList.remove("campo_fecha_siembra")
  } else {
    fecha.classList.add("campo_fecha_siembra")
  }
}


function modalPendienteSiembra(res, modal) {
  console.log(res)
  modal.innerHTML = `
                    <div class="descripcion_modal">

                          <h2>${res.modulo}</h2>

                          <span><b>Familia:</b> Tuberculos</span>

                          <span><b>Cultivos:</b></span>
                          ${res.cultivos.map(c => `
                              <h4>${c.nombre}</h4>
                              <div class="div__cultivo">
                                  <img class="img__modal" src=${c.image}>
                                  <p>${c.descripcion}</p>
                              </div>
                              `).join(' ')

    }
                          <span><b>Temperatura Actual:</b> 20C</span>
                          <span><b>Humedad Actual:</b> 60%</span>
                          <span>
                              <b>Estado</b>:
                              <select id="select_estado" onchange=cambioSembrado()>
                                  <option>Pendiente de siembra</option>
                                  <option>Sembrado</option>
                              </select>
                          </span>
                          <div id="campo_fecha_siembra" class="campo_fecha_siembra"><b>Fecha de siembra:</b> <input id="fecha_siembra" type="date" /></div>
                    </div>`;
  modal.innerHTML += `<button id="boton_cerrar">Aceptar</button>`
  wizard.style.display = "block";
  modal.style.display = "block";
  
  const botonCerrar = document.querySelector("#boton_cerrar")
  botonCerrar.addEventListener("click", e => {
    const select = document.querySelector('#select_estado')
    const fecha_siembra = document.querySelector("#fecha_siembra").value;
    res.estado = select.value;
    res.fecha_siembra = fecha_siembra;
    localStorage.setItem("reservas__cultivos", JSON.stringify(reservas.map( r => r.modulo === res.modulo ? res : r)))  
    location.reload()
  });
}

