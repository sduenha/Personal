// Criar carta super trunfo

// Quem ganha fica com a carta de quem perdeu, sempre jogando na ordem das cartas.

var pontosJogador = 0
var pontosMaquina = 0
var round = 0
var roundParImpar = 0
var acabou = 0
var escolhaMaquina = 0
var atributoSelecionadoMaquina = 0
var numeroDaCartaJogador = 0
var numeroDaCartaMaquina = 0
var resultadoRound = 0

var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
numeroDeCartas = cartas.length
var baralhoJogador = []
var baralhoMaquina = []

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
    var divQuantidadeCartas = document.querySelector('#quantidade-cartas')
    var html = 'Quantidade de cartas do jogador: ' + baralhoJogador.length + '/Quantidade de cartas da Maquina: ' + baralhoMaquina.length
    
    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.querySelector('#placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function sortearCartaComeco() {
    round ++
    roundParImpar = round % 2

    if (round == 1){
        sortearCarta()

        document.getElementById('btnSortear').disabled = true
        document.getElementById('btnJogar').disabled = false
    
        cartaQueVaiSerJogadaJogador()
        cartaQueVaiSerJogadaMaquina()
        exibeCartaJogador()
    }else{
        document.getElementById('btnSortear').disabled = true
        document.getElementById('btnJogar').disabled = false
    
        cartaQueVaiSerJogadaJogador()
        cartaQueVaiSerJogadaMaquina()
        exibeCartaJogador()
    }

    console.log('Roud ' + round)
    console.log('----------')
    console.log('Jogador')

    for(var i = 0; i < baralhoJogador.length; i++){
        console.log(baralhoJogador[i].nome)
    }

    console.log('----------')
    console.log('Maquina')

    for(var i = 0; i < baralhoMaquina.length; i++){
        console.log(baralhoMaquina[i].nome)
    }
    console.log('----------')
}

function sortearCarta() {

    for(var i = baralhoJogador.length; i < numeroDeCartas/2; i++){
        var numeroCartaJogador = parseInt(Math.random() * cartas.length)
        baralhoJogador.push(cartas[numeroCartaJogador])
        cartas.splice(numeroCartaJogador, 1)
    }

    while (baralhoMaquina.length < numeroDeCartas/2) {
        var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
        baralhoMaquina.push(cartas[numeroCartaMaquina])
        cartas.splice(numeroCartaMaquina, 1)
    }
}

function cartaQueVaiSerJogadaJogador() {
    cartaJogador = baralhoJogador[numeroDaCartaJogador]
    numeroDaCartaJogador++
    if(numeroDaCartaJogador >= baralhoJogador.length){
        numeroDaCartaJogador = 0
    }
}

function cartaQueVaiSerJogadaMaquina() {
    cartaMaquina = baralhoMaquina[numeroDaCartaMaquina]
    numeroDaCartaMaquina++
    if(numeroDaCartaMaquina >= baralhoMaquina.length){
        numeroDaCartaMaquina = 0
    }
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    if(roundParImpar == 1) {
        for (var atributo in cartaJogador.atributos) {
            opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
        }
    }else {
        for (var atributo in cartaJogador.atributos) {
            opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
        }
        maquinaEscolher()
    }
    

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }

}

function jogar() {
    var divResultado = document.getElementById("resultado")

    if (roundParImpar == 1){
        var atributoSelecionado = obtemAtributoSelecionado()
        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
            pontosJogador++
            htmlResultado = '<p class="resultado-final">Venceu</p>'
            baralhoJogador.push(cartaMaquina)
            baralhoMaquina.splice(cartaMaquina, 1)
            return resultadoRound = 0
        } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
            pontosMaquina++
            baralhoMaquina.push(cartaJogador)
            baralhoJogador.splice(cartaJogador, 1)
            return resultadoRound = 1
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
            return resultadoRound = 2
        }
    }else if(roundParImpar == 0){
        var atributoSelecionadoMaquina = maquinaEscolher()
        if (cartaJogador.atributos[atributoSelecionadoMaquina] > cartaMaquina.atributos[atributoSelecionadoMaquina]) {
            pontosJogador++
            htmlResultado = '<p class="resultado-final">Venceu! a Maquina escolheu ' + atributoSelecionadoMaquina + '</p>'
            baralhoJogador.push(cartaMaquina)
            baralhoMaquina.splice(cartaMaquina, 1)
        } else if (cartaJogador.atributos[atributoSelecionadoMaquina] < cartaMaquina.atributos[atributoSelecionadoMaquina]) {
            htmlResultado = '<p class="resultado-final">Perdeu! a Maquina escolheu ' + atributoSelecionadoMaquina + '</p>'
            pontosMaquina++
            baralhoMaquina.push(cartaJogador)
            baralhoJogador.splice(cartaJogador, 1)
        } else {
            htmlResultado = '<p class="resultado-final">Empatou! a Maquina escolheu '  + atributoSelecionadoMaquina + '</p>'
        }
    }


    if(baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
      alert('Fim de jogo')
      acabou = 1
      if(pontosJogador > pontosMaquina) {
        htmlResultado += '<p class="resultado-final">Você venceu!</p>'
      }else if (pontosJogador == pontosMaquina) {
        htmlResultado += '<p class="resultado-final">O jogo empatou!</p>'
      }else{
        htmlResultado += '<p class="resultado-final">A maquina Venceu! Tente novamente</p>'
      }
    }else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado
    document.querySelector('#btnJogar').disabled = true
  
    exibeCartaMaquina()
    atualizaPlacar()
    atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.querySelector('#cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.querySelector('#btnSortear').disabled = false
  document.querySelector('#btnJogar').disabled = true
  document.querySelector('#btnProximaRodada').disabled = true
  
  var divResultado = document.querySelector('#resultado')
  divResultado.innerHTML = ""
}

function maquinaEscolher() {
    var ataque = cartaMaquina.atributos.ataque
    var defesa = cartaMaquina.atributos.defesa
    var magia = cartaMaquina.atributos.magia

    if(ataque > defesa && ataque > magia){
        return escolhaMaquina = 'ataque'
    }else if(defesa > ataque && defesa > magia){
        escolhaMaquina = 'defesa'
    }else if(magia > ataque && magia > defesa){
        return escolhaMaquina = 'magia'
    }



}