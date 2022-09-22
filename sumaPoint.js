setInterval(()=>{
const URL = "https://cr.is-a.dev/v1/battlelog/QRUQQLV0"
const xhr = new XMLHttpRequest();

function onRequestHanler(){
    if(this.readyState==4 && this.status==200){
        const data = JSON.parse(this.response);
       
        const HTMLResponse = document.querySelector("#prueba")

        
            let puntos = data.items[0].battle.trophyChange+data.items[1].battle.trophyChange+data.items[2].battle.trophyChange+data.items[3].battle.trophyChange+data.items[4].battle.trophyChange+data.items[5].battle.trophyChange+data.items[6].battle.trophyChange+data.items[7].battle.trophyChange+data.items[8].battle.trophyChange+data.items[9].battle.trophyChange+data.items[10].battle.trophyChange+data.items[11].battle.trophyChange+data.items[12].battle.trophyChange+data.items[13].battle.trophyChange+data.items[14].battle.trophyChange+data.items[15].battle.trophyChange+data.items[16].battle.trophyChange+data.items[17].battle.trophyChange+data.items[18].battle.trophyChange+data.items[19].battle.trophyChange+data.items[20].battle.trophyChange+data.items[21].battle.trophyChange+data.items[22].battle.trophyChange+data.items[23].battle.trophyChange+data.items[24].battle.trophyChange
           
            
   
    HTMLResponse.innerHTML = `Ultimos 25 games: ${puntos} <img src="img/trophy.png" width="100px">`
}
    
}
xhr.addEventListener('load',onRequestHanler);
xhr.open('GET',URL);
xhr.send();
},5000)