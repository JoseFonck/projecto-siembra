const menuButton = document.querySelector(".menuButton")
const drawerMenu = document.querySelector(".nav")
const wizard = document.querySelector(".wizard")

menuButton.addEventListener('click', () => {
  drawerMenu.style.left = 0
  wizard.style.display = "block"
})

wizard.addEventListener('click', () => {
  drawerMenu.style.left = "-310px"
  wizard.style.display = "none"
})


