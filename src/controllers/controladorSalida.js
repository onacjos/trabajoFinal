import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

import { getAuth,onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyD4OGQA4YBqU0SC8NSBQ5yP3EdkGm1G-tg",
    authDomain: "loginsuradualjosemielapp.firebaseapp.com",
    projectId: "loginsuradualjosemielapp",
    storageBucket: "loginsuradualjosemielapp.appspot.com",
    messagingSenderId: "890275566589",
    appId: "1:890275566589:web:31ac6e0b53c210c3307f94",
    measurementId: "G-NQQ4N635Y9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let avatar=document.getElementById("avatar")
let botonSalir=document.getElementById("botonsalir")

//utilizar la información del usuario logueado
const auth=getAuth()
onAuthStateChanged(auth, (user) => {
    if (user) {
        let uid=user.uid
        avatar.classList.remove("invisible")
        avatar.textContent=user.email
    }else{

    }
})

botonSalir.addEventListener("click",function(){
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href="./views/login.html"
    })
})