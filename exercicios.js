//Criar uma função que exibe "Olá, mundo!" no consol
function exibirOla() {
    console.log("Olá, mundo!");
  }
  
  exibirOla();
  //Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
  function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Alice");

  //Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
  function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

  //Criar uma função que recebe três números como parâmetros e retorna a média deles
  function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

  //Criar uma função que recebe dois números como parâmetros e retorna o maior deles
  function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

//criar função que recebe um número como parâmetro e retorna o resultado da multip desse n por ele mesmo.
function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 