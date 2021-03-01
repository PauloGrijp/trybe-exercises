// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

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

  for(let key in romaAlgo){
    for(let index in romanAlgorithm){
      if(romanAlgorithm[index] == key){
        sum += romaAlgo[key];
      }      
    }
  }
  return sum;

}

console.log(convertsRomAlgo('XXXII'))