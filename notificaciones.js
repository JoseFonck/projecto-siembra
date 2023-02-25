const notificacion = document.querySelector(".notificacion");
const button__si__reserva = document.querySelector("#button__si");
const button__no__reserva = document.querySelector("#button__no");
const box__notificaciones = document.querySelector(".notification__box")

let ban = JSON.parse(localStorage.getItem("notificacion"));
// box__notificaciones.style.display = "block"



if (!ban) {
setTimeout(() => {
    box__notificaciones.style.height = "0px";
    box__notificaciones.style.margin = "0px";
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
  box__notificaciones.style.height = "400px";
  box__notificaciones.style.margin = "100px 20px 0px 20px";
});

