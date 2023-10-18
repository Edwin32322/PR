const calcularTiempo = () =>{
    let tiempo = new Date()
    let hora = tiempo.getHours()
    let minutos = tiempo.getMinutes()
    let segundos = tiempo.getSeconds()

    hora = hora < 10 ? "0" + hora : hora
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos

    const pantallaReloj = `${hora}h:${minutos}m:${segundos}s`
    const relojDigital = document.querySelector(".reloj")
    relojDigital.innerHTML = pantallaReloj
}
setInterval(calcularTiempo, 1000)