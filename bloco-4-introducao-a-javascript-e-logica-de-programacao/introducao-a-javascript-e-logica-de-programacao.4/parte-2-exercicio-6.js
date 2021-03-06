function somaN(n){
  let soma = 0;

  for (let index = 0; index <= n; index+= 1){
    soma += index;
  }

  return soma;
}

console.log(somaN(5))