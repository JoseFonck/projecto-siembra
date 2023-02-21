const getReservas = () =>{
    const reservas_json = localStorage.getItem("reservas__cultivos");
    return JSON.parse(reservas_json || "[]");
}


const saveReservas = (newReserva) => {
    const reservas = getReservas();
    reservas.push(newReserva);
    console.log(reservas)
    
    localStorage.setItem("reservas__cultivos",JSON.stringify(reservas));
}

