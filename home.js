const container__mod = document.querySelector(".container-mod");
console.log(container__mod)

var reservas = getReservas();
console.log(reservas)



container__mod.firstElementChild.innerHTML += `<h3>${reservas[0].modulo}</h3><span>Cultivos: ${reservas[0].cultivos}</span><strong>Pendiente <br> de siembra</strong>`;


container__mod.firstElementChild.innerHTML += `<h3>${reservas[1].modulo}</h3><span>Cultivos: ${reservas[1].cultivos}</span><strong>Pendiente <br> de siembra</strong>`;
