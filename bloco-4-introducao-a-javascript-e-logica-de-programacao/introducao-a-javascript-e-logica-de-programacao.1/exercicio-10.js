let custoProduto = 100;
let valorVenda = 200;
const impostSobreProduto = 20;

let custoTotal = custoProduto + (custoProduto * (impostSobreProduto / 100));

let lucro = valorVenda - custoTotal;
let lucroTotal = lucro * 1000;

if(custoProduto < 0 || valorVenda < 0 || impostSobreProduto < 0){
  console.log("ERRO! Valor inválido")
}else{
  console.log(lucroTotal)
}