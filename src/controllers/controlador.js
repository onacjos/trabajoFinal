function cambiarCaja() {
    let boton=document.getElementById("botonChat")
    let cajaChat=document.getElementById("CajaChat")
    if (cajaChat.style.display=='none' || cajaChat.style.display=='') {
        cajaChat.style.display="block"
        } else {
            cajaChat.style.display="none"
    }
}
