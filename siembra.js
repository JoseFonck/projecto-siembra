

const wizard = document.querySelector(".wizard");

const button_cultivo = document.querySelector(".button_cultivo")



//desplega los li
document.querySelector(".a").addEventListener('click', (e)=>{
    e.preventDefault()
    let ul = document.querySelector(".ul");
    ul.style.display = "block";
    wizard.style.display = "block";
})

//oculta los li
wizard.addEventListener('click', (e)=>{
    e.preventDefault()
    let ul = document.querySelector(".ul");
    ul.style.display = "none";
    wizard.style.display = "none";
})

button_cultivo.addEventListener('click', (e)=>{
    e.preventDefault();
    let ul = document.querySelector("#cultivos");
    ul.style.display = "block";
    wizard.style.display = "block";
})

wizard.addEventListener('click', (e)=>{
    e.preventDefault()
    let ul = document.querySelector("#cultivos");
    ul.style.display = "none";
    wizard.style.display = "none";
})
