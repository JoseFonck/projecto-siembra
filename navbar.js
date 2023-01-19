const menuButton = document.querySelector(".menuButton")
const drawerMenu = document.querySelector(".nav")
const wizard = document.querySelector(".wizard")


menuButton.addEventListener('click', () => {
  drawerMenu.style.left = "0px"
  wizard.style.display = "block"
})

wizard.addEventListener('click', () => {
  drawerMenu.style.left = "-250px"
  wizard.style.display = "none"
})


document.querySelector(".cerrarSesion").addEventListener("click",()=>{
  window.location.href = "login.html";
})

