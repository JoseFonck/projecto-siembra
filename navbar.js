const menuButton = document.querySelector(".menuButton")
const drawerMenu = document.querySelector(".nav")
const wizard = document.querySelector(".wizard")

const siembraButton = document.querySelector("#itemSiembra");

drawerMenu.style.left = "-250px";
wizard.style.display = "none";


//muestra navbar
menuButton.addEventListener('click', () => {
  drawerMenu.style.left = "0px";
  wizard.style.display = "block";
});


// Oculta navbar
wizard.addEventListener('click', () => {
  drawerMenu.style.left = "-250px";
  wizard.style.display = "none";
});

siembraButton.addEventListener('click', ()=>{
  location.href = "siembra.html";
});

// Vuelve a login
document.querySelector(".cerrarSesion").addEventListener("click",()=>{
  window.location.href = "login.html";
});


