const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura em metros? ');

const resultado = peso / Math.pow(altura, 2);

console.log(resultado)
