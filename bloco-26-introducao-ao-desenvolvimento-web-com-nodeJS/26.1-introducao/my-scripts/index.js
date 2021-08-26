const readline = require('readline-sync');

const choice = readline.questionInt(`
  Qual script deseja executar?
  1 - IMC;
  2 - Velocidade média;
  3 - Sorteio;
`);

switch (choice) {
  case 1:
    require('./imc.js')  
    break;
  case 2:
    require('./velocidade.js')  
    break;
  case 3:
    require('./sorteio.js')  
    break;
  default:
    break;
} 





