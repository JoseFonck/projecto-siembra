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

