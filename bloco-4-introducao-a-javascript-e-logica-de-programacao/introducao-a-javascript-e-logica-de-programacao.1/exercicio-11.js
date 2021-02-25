let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let descontoInss;
let descontoIr;

if(salarioBruto <= 1556.94){
  descontoInss = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
  descontoInss = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
  descontoInss = salarioBruto * 0.11;
}else{
  descontoInss = 570.88;
}

salarioBase = salarioBruto - descontoInss;

if(salarioBase <= 1903.98){
  salarioLiquido = salarioBase;
}else if(salarioBase <= 2826.65){
  descontoIr = (salarioBase * 0.075) - 142.80;
  salarioLiquido = salarioBase - descontoIr;
}else if(salarioBase <= 3751.05){
  descontoIr = (salarioBase * 0.15) - 354.80;
  salarioLiquido = salarioBase - descontoIr;
}else if(salarioBase <= 4664.68){
  descontoIr = (salarioBase * 0.225) - 636.13;
  salarioLiquido = salarioBase - descontoIr;
}else if(salarioBase > 4664.68){
  descontoIr = (salarioBase * 0.275) - 869.36;
  salarioLiquido = salarioBase - descontoIr;
}

console.log(salarioLiquido);