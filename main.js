const API_URL = "https://cr.is-a.dev/QRUQQLV0";

const xhr = new XMLHttpRequest();

function onRequestHanler(){
    if(this.readyState==4 && this.status==200){
        const data = JSON.parse(this.response);
        console.log(data)
        const HTMLResponse = document.querySelector("#app")
        
        HTMLResponse.innerHTML = `<img src='img/perfil.jpg' width=100px;>${data.name}<br> <img src='img/trophy.png' width=100px;>TROFEOS: ${data.trophies}`
    }
}
xhr.addEventListener('load',onRequestHanler);
xhr.open('GET',API_URL);
xhr.send();