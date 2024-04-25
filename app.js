let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto";
let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

//FUNÇÃO QUE EXIBE COISAS NA TELA, ELA FAZ ALGO MAS NÃO DEVOLVE INFORMAÇÃO
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha umnúmero entre 1 e 10");
}

exibirMensagemInicial();

//ESSA É UMA FUNÇÃO SEM PARAMETRO E SEM RETORNO
function verificarChute () {
    let chute = document.querySelector("input").value;
   // console.log (chute == numeroSecreto);
}
   if (chute == numeroSecreto) {
    exibirTextoNaTela ("h1", "Acertou!");   
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = 'Você descobriu o número secreto com ${Tentativas} ${palavraTentativa}! ; 
        exibirTextoNaTela ("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disebled");
   } else { 
     if (chute > numeroSecreto)  {
        exibirTextoNaTela("p", "O número Secreto é menor");
     } else {
        exibirTextoNaTela("p", "O número secreto é maior");
     }
    // tentativas = tentativas + 1;
     tentativas ++;
     limparCampo();
   }


// NESSA FUNÇÃO NÃO TEMOS PARAMETRO MAS TEMOS UM RETORNO DE INFORMAÇÃO QUE SERIA NUMEROS DE 1 A 10
function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Match.random()* numeroLimite + 1);
  let quantidadeDeELementosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeELementosNaLista == numeroLimite) {
    listaDeNumerosSorteados[];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);

    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";   
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}