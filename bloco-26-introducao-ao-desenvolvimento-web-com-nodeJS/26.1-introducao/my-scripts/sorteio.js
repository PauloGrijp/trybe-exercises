const readline = require('readline-sync');

function raffle() {

  const choice = readline.questionInt('Insira um numero entre 0 e 10: ');

  const random = Math.floor(Math.random() * 11);

  console.log(random)
  if(random === choice) {
    console.log("Parabéns, número correto!")
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${random}`)
  }

  const playAgain = readline.question('Deseja jogar novamente? ');

  if(playAgain === 'sim') raffle()

}

raffle()
