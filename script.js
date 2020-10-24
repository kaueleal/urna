let btn = document.querySelector('div#btn')
let name = document.querySelector('p#nome')
let part = document.querySelector('p#partido')
let vice = document.querySelector('p#vice')
let foto = document.querySelector('div#foto')
let foto2 = document.querySelector('div#foto-vice')
let final = document.querySelector('div#tela3')
let res1 = document.querySelector('p#num1')
let n1 = 0
let resnum1 = ''
let res2 = document.querySelector('p#num2')
let resnum2 = ''
let res3 = document.querySelector('p#num3')
let resnum3 = ''
let res4 = document.querySelector('p#num4')
let resnum4 = ''
let res5 = document.querySelector('p#num5')
let resnum5 = ''
let branc = 0
let audioc = new Audio('audio/audiou.mp3')
let audiot = new Audio('audio/audiot.mp3')
let candidato = [{
    "nome": "Carlão Gomes",
    "vice": "Getúlio Gomes",
    "num1": '1',
    "num2": '8',
    "partido": "Plus Ultra",
    "foto": '<img id="foton" src="img/carlao.jpg" />',
    "foto2": '<img id="foto-vice" src="img/getulio.jpeg" />'
}]
let vereador = [{
    "nome": "Luciana Lóssio",
    "num1": '1',
    "num2": '8',
    "num3": '5',
    "num4": '5',
    "num5": '6',
    "partido": "Plus Ultra",
    "foto": '<img id="foton" src="img/luciana.jpeg" />'    
}]
let vere = 1
let conf = 0
function btn0(){
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum1 = '0'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum2 = '0'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum3 = '0'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum4 = '0'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum5 = '0'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum1 = '0'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">0</p>'
            n1++
            resnum2 = '0'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn1() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum1 = '1'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum2 = '1'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum3 = '1'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum4 = '1'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum5 = '1'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum1 = '1'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">1</p>'
            n1++
            resnum2 = '1'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn2() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum1 = '2'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum2 = '2'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum3 = '2'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum4 = '2'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum5 = '2'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum1 = '2'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">2</p>'
            n1++
            resnum2 = '2'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn3() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum1 = '3'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum2 = '3'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum3 = '3'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum4 = '3'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum5 = '3'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum1 = '3'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">3</p>'
            n1++
            resnum2 = '3'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn4() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum1 = '4'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum2 = '4'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum3 = '4'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum4 = '4'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum5 = '4'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum1 = '4'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">4</p>'
            n1++
            resnum2 = '4'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn5() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum1 = '5'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum2 = '5'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum3 = '5'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum4 = '5'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum5 = '5'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum1 = '5'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">5</p>'
            n1++
            resnum2 = '5'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }
    }

    audiot.play()
}
function btn6() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum1 = '6'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum2 = '6'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum3 = '6'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum4 = '6'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum5 = '6'
            vere = 2
            if(resnum1 == vereador[0].num1 && resnum2 == vereador[0].num2 && resnum3 == vereador[0].num3 && resnum4 == vereador[0].num4 && resnum5 == vereador[0].num5){
                name.innerHTML = `<b>Nome: ${vereador[0].nome}</b>`
                part.innerHTML = `<b>Partido: ${vereador[0].partido}</b>`
                foto.innerHTML = `<div id="cand">${vereador[0].foto}VEREADOR</div>`
                final.innerHTML = `<hr id="hr">`
                final.innerHTML += `<h3 id="final">Aperte a tecla:</h3><br>`
                final.innerHTML += `<h4 id="final">VERDE para CONFIRMAR o voto</h4>`
                final.innerHTML += `<h4 id="final">VERMELHA para REINICIAR o voto</h4>`
            }
            else{
                name.innerHTML = '<b>NÚMERO ERRADO</b>'
                vice.innerHTML = '<h1>VOTO NULO</h1>'            
            }           
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum1 = '6'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">6</p>'
            n1++
            resnum2 = '6'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn7() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum1 = '7'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum2 = '7'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum3 = '7'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum4 = '7'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum5 = '7'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum1 = '7'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">7</p>'
            n1++
            resnum2 = '7'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}
function btn8() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum1 = '8'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum2 = '8'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum3 = '8'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum4 = '8'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum5 = '8'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum1 = '8'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">8</p>'
            n1++
            resnum2 = '8'
            if(resnum1 == candidato[0].num1 && resnum2 == candidato[0].num2){
                name.innerHTML = `<b>Nome:</b> ${candidato[0].nome}`
                part.innerHTML = `<b>Partido:</b> ${candidato[0].partido}`
                vice.innerHTML = `<b>Vice:</b> ${candidato[0].vice}`
                foto.innerHTML = `<div id="cand">${candidato[0].foto}PREFEITO</div>`
                foto2.innerHTML = `<div id="vice-cand">${candidato[0].foto2}<p style="padding-top:100%">VICE-PREFEITO<p></div>`
                final.innerHTML = `<hr id="hr">`
                final.innerHTML += `<h3 id="final">Aperte a tecla:</h3><br>`
                final.innerHTML += `<h4 id="final">VERDE para CONFIRMAR o voto</h4>`
                final.innerHTML += `<h4 id="final">VERMELHA para REINICIAR o voto</h4>`
            }
            else{
                name.innerHTML = '<b>NÚMERO ERRADO</b>'
                vice.innerHTML = '<h1>VOTO NULO</h1>'            
            }
            audiot.play()
        }
    }

}
function btn9() {
    if(vere == 1){
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum1 = '9'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum2 = '9'
        }
        else if (n1 == 2){
            res3.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum3 = '9'
        }
        else if (n1 == 3){
            res4.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum4 = '9'
        }  
        else if (n1 == 4){
            res5.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum5 = '9'
            vere = 2
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'            
        }                          
    }
    else{ //entrou na do prefeito
        if(n1 == 0){
            res1.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum1 = '9'
            branc++
        }
        else if (n1 == 1){
            res2.innerHTML = '<p id="txt">9</p>'
            n1++
            resnum2 = '9'
            name.innerHTML = '<b>NÚMERO ERRADO</b>'
            vice.innerHTML = '<h1>VOTO NULO</h1>'
        }        
    }
    audiot.play()
}

function corrige() {
    audiot.play()
    res1.innerHTML = ''
    resnum1 = ''
    res2.innerHTML = ''
    resnum2 = ''
    res3.innerHTML = ''
    resnum3 = ''
    res4.innerHTML = ''
    resnum4 = ''
    res5.innerHTML = ''
    resnum5 = ''    
    name.innerHTML = ''
    part.innerHTML = ''
    vice.innerHTML = ''
    foto.innerHTML = ''
    foto2.innerHTML = ''
    final.innerHTML = ''
    n1 = 0
    if(branc > 0){
        branc--
        vere--
    }
    if(conf == 0){
        vere = 1
    }
    else{
        let cp3 = document.querySelector('div.campo3')
        let cp4 = document.querySelector('div.campo4')
        let cp5 = document.querySelector('div.campo5')
        cp3.style.visibility = 'hidden'
        cp4.style.visibility = 'hidden'
        cp5.style.visibility = 'hidden'
        vere = 0
    }
}
function branco() {
    audiot.play()
    if(branc == 0){
        let white = 0
        corrige()
        resnum1 = 'branco'
        resnum2 = 'branco'
        resnum3 = 'branco'
        resnum4 = 'branco'
        resnum5 = 'branco'
        vere = 2
        part.innerHTML = '<h1 style="margin-left: 150px;">VOTO EM BRANCO</h1>'
        white++
        if(white > 0){
            n1 = 100
        }
        if(conf == 1){
            vere = 0
        }
    }
}
function confirma(){
    if(vere == 2){
        if(resnum1 != '' || resnum2 != '' || resnum3 != '' || resnum4 != '' || resnum5 != ''){
            conf = 1
            let car = document.querySelector('h2#cargo')
            car.innerHTML = 'PREFEITO'
            corrige()     
        }
        audioc.play()
    }
    else if(vere == 0){
        if(resnum1 != '' || resnum2 != ''){
            let tela2 = document.querySelector('div#tela2')
            tela2.innerHTML = '<h1 id="fim">FIM</h1>'
            final.innerHTML = ''
            audioc.play()
        }
    }
}