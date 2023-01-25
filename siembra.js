


pathname = location.pathname;


const wizard = document.querySelector(".wizard");
const button_cultivo = document.querySelector(".button_cultivo");
const help__message = document.querySelector(".help__reserva");
const help__img = document.querySelector(".help__img");
let ul = document.querySelector(".ul");


ul.style.display = "none";
wizard.style.display = "none";

//desplega los li
document.querySelector(".mod").addEventListener('click', (e)=>{
    e.preventDefault()
    let ul = document.querySelector(".ul");
    ul.style.display = "block";
    wizard.style.display = "block";
    const li = document.querySelectorAll(".li")
    asignarModulo(li);
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
    wizard.style.background = "none";
    
    //no funca
})

wizard.addEventListener('click', (e)=>{
    e.preventDefault()
    let ul = document.querySelector("#cultivos");
    ul.style.display = "none";
    wizard.style.display = "none";
    help__message.style.display = "none";
    wizard.style.background = "none";
})


help__img.addEventListener('click', ()=>{
    help__message.style.display = "block";
    wizard.style.display = "block";
    wizard.style.background = "#00000067";
})

function asignarModulo(items){
    items.forEach( item => {
        item.addEventListener('click', ()=>{
            const modulo = item.innerText;
        })
    });
}

function asignarCultivo(cultivos){
    cultivos.forEach(cultivo =>{
        cultivo.addEventListener('click', ()=>{
            const cultiv = cultivo;
        })
        return cultiv;
    })
}

