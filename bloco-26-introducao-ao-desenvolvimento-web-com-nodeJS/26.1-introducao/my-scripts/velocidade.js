const readline = require('readline-sync');

function averageSpeed() {

  const distancia = readline.questionInt('Qual a distancia em metros? ');
  const tempo = readline.questionInt('Em quanto tempo percorreu? ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(velocidadeMedia)

}

averageSpeed()