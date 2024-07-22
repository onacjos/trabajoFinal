let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajeChat=document.getElementById("mensajeChat")

let preguntas=[
    "¿Cuál es tu nombre?",
    "¿Cuál es tu edad?",
    "¿Cuál es tu profesión?",
    "¿Cuál es tu película favorita?",
    "¿Tienes mascotas?",
    "¿Cuál es tu hobby?"

]

let respuestas=[
    "Hola, mi nombre es JoseMiel",
    "Mi edad es 18 años",
    "Mi profesión es programador",
    "Mi película favorita es la de Star Wars",
    "No tengo mascotas",
    "Mi hobby es jugar videojuegos"
]

let indicePregunta=[]

//función para detectar el inicio y desarrollo de la conversación
function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}. ${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="Text-start"> </b> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<=preguntas.length){
            mensajeChat.innerHTML+=`<p class="Text-start">  </b> ${preguntas[numeroPregunta]}</p>`
            mensajeChat.innerHTML+=`<p class="Text-end">  </b> ${respuestas[numeroPregunta]}</p>`
        }
    }
}

//rutina para activar el chatbot
botonSend.addEventListener("click",procesarEntradaChat)

textoChat.addEventListener("keypress",function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradaChat()
    }
})