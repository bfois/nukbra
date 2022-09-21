const API_URL1 = "https://cr.is-a.dev/v1/battlelog/QRUQQLV0";

const xhr = new XMLHttpRequest();

function onRequestHanler(){
    if(this.readyState==4 && this.status==200){
        const data = JSON.parse(this.response);
        console.log(data)
        const HTMLResponse = document.querySelector("#brawler")
        
        function contiene(){
            const a = data.items[0].battle.teams[0][0].tag
            const b = data.items[0].battle.teams[0][1].tag
            const c = data.items[0].battle.teams[0][2].tag
            const d = data.items[0].battle.teams[1][0].tag
            const e = data.items[0].battle.teams[1][1].tag
            const f = data.items[0].battle.teams[1][2].tag
            if(a=="#QRUQQLV0"){
                return  data.items[0].battle.teams[0][0].brawler.name +" "+":" + " "+data.items[0].battle.teams[0][0].brawler.trophies
            }
            else if(b=="#QRUQQLV0"){
                return  data.items[0].battle.teams[0][1].brawler.name +" "+":"+ " "+data.items[0].battle.teams[0][1].brawler.trophies
            }
            else if(c=="#QRUQQLV0"){
                return data.items[0].battle.teams[0][2].brawler.name +" "+":" + " "+data.items[0].battle.teams[0][2].brawler.trophies
            }
            else if(d=="#QRUQQLV0"){
                return data.items[0].battle.teams[1][0].brawler.name +" "+":" +" "+ data.items[0].battle.teams[1][0].brawler.trophies
            }
            else if(e=="#QRUQQLV0"){
                return  data.items[0].battle.teams[1][1].brawler.name +" "+":" + " "+data.items[0].battle.teams[1][1].brawler.trophies
            }
            else if(f=="#QRUQQLV0"){
                return data.items[0].battle.teams[1][2].brawler.name +" "+":" + " "+data.items[0].battle.teams[1][2].brawler.trophies
            }
            
            }
           
            
            const API_URL2 = "https://cr.is-a.dev/QRUQQLV0/brawlers";
            const xhr = new XMLHttpRequest();
            const splitcont = contiene().split(" ")
                        
                        
            function onRequestHanler(){
                if(this.readyState==4 && this.status==200){
                    const data = JSON.parse(this.response);
                    console.log(data)
                    const HTMLResponse = document.querySelector("#img")
                    let list = data.brawlers
                        
                    function encontrar(){
                        let stringVacio=""
                        for(let i = 0;i<list.length;i++){
                            if(list[i] == splitcont[0]){
                                stringVacio = list[i]
                              const nuevoString =stringVacio[0] + stringVacio.slice(1).toLowerCase()
                               return nuevoString
                            }
                        }
                        
                    }
                    
                    let linkbrawl = `<img src="https://cdn.brawlify.com/brawler/${encontrar()}.png" width=100px>`
                    
                    HTMLResponse.innerHTML = `${linkbrawl}`
                }
            }
            xhr.addEventListener('load',onRequestHanler);
            xhr.open('GET',API_URL2);
            xhr.send();
            
        HTMLResponse.innerHTML = `${contiene()}`
    }
}
xhr.addEventListener('load',onRequestHanler);
xhr.open('GET',API_URL1);
xhr.send();

