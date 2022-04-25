const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());


    const meses = ['ene', 'feb', 'mar'];
    const dias = ['dom', 'lun', 'mar', 'mier', 'juev','vier', 'sab']
    const diaSemana = dias[fecha.getDay()];
    let data = fecha.getDate(); 
    let mes = fecha.getMonth();
    let año = fecha.getFullYear(); 
         let fechasa = `${diaSemana} ${data} ${mes} ${año}`

    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;
    document.getElementById('fecha').innerHTML = fechasa;


    console.log('funca')
}
const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
        return hora;
    
}

setInterval(mostrarReloj, 1000);