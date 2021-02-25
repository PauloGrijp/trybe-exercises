let nomePeca = 'Bispo';
let nomePecaLowerCase = nomePeca.toLowerCase();


switch(nomePecaLowerCase){
  case 'peão':
    console.log('Frente');
    break;
  case 'bispo':
    console.log('Diagonal');
    break;
  case 'torre':
    console.log('Frente e Lateral');
    break;
  case 'cavalo':
    console.log("Em 'L'");
    break;
  case 'rei':
    console.log('Frente, Lateral e Diagonal');
    break;
  case 'rainha':
    console.log('Frente, Lateral e Diagonal');
    break;
  default:
    console.log('ERRO! Peça inválida');
}