const notificacion__box = document.querySelectorAll(".notification__box");
const modal = document.querySelector(".modal__monitoreo");
const wizard = document.querySelector(".wizard");
const botonera = document.querySelector(".botones");
const array_notificacion = [];


notificacion__box.forEach((notificacion) =>{

    notificacion.lastElementChild.addEventListener("click", ()=>{
        if (notificacion.lastElementChild.textContent.includes("toldo")){
            modal.innerHTML = `A las 16:00hs del dia 20/02 se removio el 
                                toldo debido a que al cultivo
                                le faltaba luz.`
        }
        else if(notificacion.lastElementChild.textContent.includes("riego"))
        {
            modal.innerHTML = `A las 16:00hs del dia 20/02 se activo el riego automatico porque al cultivo le faltaba humedad.`
        }
        else if(notificacion.lastElementChild.textContent.includes("despleg"))
        {
            modal.innerHTML = `A las 16:00hs del dia 20/02 se desplego el toldo el cultivo ya recibio suficiente luz.`
        }
        wizard.style.display = "block";
        modal.style.display ="flex";
        console.log(modal)
    })
  
})

wizard.addEventListener("click", ()=>{
    wizard.style.display = "none";
    modal.style.display ="none";
})


const checkChange = (notificacion__box) =>{ 
    const checked = notificacion__box.some(notificacion => notificacion.firstElementChild.checked); 
    
    if(checked) botonera.style.marginTop = "65px";
    else botonera.style.marginTop = "0px";
}   

