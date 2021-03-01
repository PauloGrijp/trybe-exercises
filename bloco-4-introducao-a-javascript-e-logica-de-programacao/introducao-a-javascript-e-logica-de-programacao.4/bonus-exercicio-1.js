
function convertsRomAlgo(romanAlgorithm){

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
  let num = [];

  for (let index = 0; index < romanAlgorithm.length; index += 1){   
    for(let key in romaAlgo){
      if(romanAlgorithm[index] == key){
        
      }
    }
  }

  
  return sum
  
}

console.log(convertsRomAlgo('IX'))