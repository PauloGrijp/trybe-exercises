
function convertsRomAlgo(romanAlgorithm){
  let roman = romanAlgorithm.toUpperCase();
  let romaAlgo = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };  
  
  let sum = 0;
  

  for (let index = 0; index < roman.length; index += 1){   
    let atual = roman[index];
    let next = roman[index + 1];   

      if(romaAlgo[next] > romaAlgo[atual]){
        sum -= romaAlgo[atual];
      }else{
        sum += romaAlgo[atual];
      }
  }   
  return sum
  
}

console.log(convertsRomAlgo('X'))