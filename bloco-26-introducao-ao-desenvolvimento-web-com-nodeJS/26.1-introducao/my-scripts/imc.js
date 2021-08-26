const readline = require('readline-sync');

function imc() {
  const peso = readline.questionFloat('Qual o seu peso? ');
  const altura = readline.questionFloat('Qual a sua altura em metros? ');
  
  const resultado = peso / Math.pow(altura, 2);

  console.log(resultado.toFixed(2));

  if (resultado < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (resultado >= 18.5 && resultado < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (resultado >= 25 && resultado < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (resultado >= 30 && resultado < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (resultado >= 35 && resultado < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');

}  

imc();
