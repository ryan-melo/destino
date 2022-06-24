const respostas = [
    "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

const elementoResposta = document.querySelector('#resposta')

const inputPergunta = document.querySelector('#inputPergunta')

function fazerPergunta() {

    if (inputPergunta.value == "") {
        elementoResposta.innerHTML = 'Digite sua pergunta!'
        return
    }

    const pergunta = "<div class=\"resposta\">" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    elementoResposta.innerHTML  = pergunta + respostas[numeroAleatorio]

    // setTimeout(function () {
    //     elementoResposta.style.opacity = 0
    // }, 5000)

    setTimeout(function() {
        elementoResposta.innerHTML = ""
    }, 4000)
}

function fazerPerguntaEnter(e) {
    if (e.keyCode == 13) {
        if (inputPergunta.value == "") {
            elementoResposta.innerHTML = 'Digite sua pergunta!'
            return
        }
    
        const pergunta = "<div class=\"resposta\">" + inputPergunta.value + "</div>"
    
        const totalRespostas = respostas.length
        const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
        
        elementoResposta.innerHTML  = pergunta + respostas[numeroAleatorio]
    
        setTimeout(function() {
            elementoResposta.innerHTML = ""
        }, 4000)
    }
}