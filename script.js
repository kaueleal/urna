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
let candidato = [{
    "nome": "Carlão Gomes",
    "vice": "Getúlio Gomes",
    "num1": '1',
    "num2": '8',
    "partido": "Plus Ultra"
},
{
    "nome": "João Sena",
    "vice": "Luciana Lóssio",
    "num1": "5",
    "num2": "5",
    "partido": "WWE",
    "foto": '<img id="foton" src="img/johncena.jpg" />',
    "foto2": '<img id="foto-vice" src="img/luciana.jpeg" />'
}]

function btn0(){
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">0</p>'
        n1++
        resnum1 = '0'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">0</p>'
        n1++
        resnum2 = '0'
    }     
}
function btn1() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">1</p>'
        n1++
        resnum1 = '1'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">1</p>'
        n1++
        resnum2 = '1'
    }
}
function btn2() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">2</p>'
        n1++
        resnum1 = '2'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">2</p>'
        n1++
        resnum2 = '2'
    }
}
function btn3() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">3</p>'
        n1++
        resnum1 = '3'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">3</p>'
        n1++
        resnum2 = '3'
    }
}
function btn4() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">4</p>'
        n1++
        resnum1 = '4'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">4</p>'
        n1++
        resnum2 = '4'
    }
}
function btn5() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">5</p>'
        n1++
        resnum1 = '5'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">5</p>'
        n1++
        resnum2 = '5'
        if(resnum1 == candidato[1].num1 && resnum2 == candidato[1].num2){
            name.innerHTML = `<b>Nome: ${candidato[1].nome}</b>`
            part.innerHTML = `<b>Partido: ${candidato[1].partido}</b>`
            vice.innerHTML = `<b>Vice: ${candidato[1].vice}</b>`
            foto.innerHTML = `<div id="cand">${candidato[1].foto}PREFEITO</div>`
            foto2.innerHTML = `<div id="vice-cand">${candidato[1].foto2}VICE-PREFEITA</div>`
            final.innerHTML = `<hr id="hr">`
            final.innerHTML += `<h3 id="final">Aperte a tecla:</h3><br>`
            final.innerHTML += `<h4 id="final">VERDE para CONFIRMAR o voto</h4>`
            final.innerHTML += `<h4 id="final">VERMELHA para REINICIAR o voto</h4>`
        }
    }
}
function btn6() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">6</p>'
        n1++
        resnum1 = '6'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">6</p>'
        n1++
        resnum2 = '6'
    }
}
function btn7() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">7</p>'
        n1++
        resnum1 = '7'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">7</p>'
        n1++
        resnum2 = '7'
    }
}
function btn8() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">8</p>'
        n1++
        resnum1 = '8'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">8</p>'
        n1++
        resnum2 = '8'
        if(resnum1 == candidato[0].num1 && resnum2 == candidato[0].num2){
            name.innerHTML = `<b>Nome:</b> ${candidato[0].nome}`
            part.innerHTML = `<b>Partido:</b> ${candidato[0].partido}`
            vice.innerHTML = `<b>Vice:</b> ${candidato[0].vice}`
            final.innerHTML = `<hr id="hr">`
            final.innerHTML += `<h3 id="final">Aperte a tecla:</h3><br>`
            final.innerHTML += `<h4 id="final">VERDE para CONFIRMAR o voto</h4>`
            final.innerHTML += `<h4 id="final">VERMELHA para REINICIAR o voto</h4>`
        }
    }
}
function btn9() {
    if(n1 == 0){
        res1.innerHTML = '<p id="txt">9</p>'
        n1++
        resnum1 = '9'
    }
    else if (n1 == 1){
        res2.innerHTML = '<p id="txt">9</p>'
        n1++
        resnum2 = '9'
    }
}

function corrige() {
    res1.innerHTML = '<p></p>'
    res2.innerHTML = '<p></p>'
    name.innerHTML = '<p></p>'
    part.innerHTML = '<p></p>'
    vice.innerHTML = '<p></p>'
    foto.innerHTML = ''
    foto2.innerHTML = ''
    final.innerHTML = ''
    n1 = n1 - 2
}
function branco() {
    vice.innerHTML = '<h1>VOTO EM BRANCO</h1>'
}
function confirma(){
    let tela2 = document.querySelector('div#tela2')
    tela2.innerHTML = '<h1 id="fim">FIM</h1>'
    final.innerHTML = ''
}