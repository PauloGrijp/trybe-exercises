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
