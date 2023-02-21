const buttonShow = document.querySelector(".show_password");
const buttonHiden = document.querySelector(".hidden_password");

const input = document.querySelector(".password_input");


buttonShow.addEventListener("click", () => {
  input.setAttribute("type", "text");
  buttonHiden.style.display = "block";
  buttonShow.style.display = "none"
})

buttonHiden.addEventListener("click", () => {
  input.setAttribute("type", "password");
  buttonShow.style.display = "block";
  buttonHiden.style.display = "none";
})



