function add(num1, num2) {
  
  let stringNum1 = num1.toString();
  let stringNum2 = num2.toString();

  let reverseNum1 = stringNum1.split('').reverse();
  let reverseNum2 = stringNum2.split('').reverse();

  let sum = [];

  for(let indexNum1 = 0; indexNum1 < reverseNum1.length; indexNum1 += 1){
    for(let indexNum2 = 0; indexNum2 < reverseNum2.length; indexNum2 += 1){
      if(reverseNum1.length == reverseNum2.length){
        if(indexNum1 == indexNum2){
          let convertNum1 = parseInt(reverseNum1[indexNum1]);
          let convertNum2 = parseInt(reverseNum2[indexNum2]);
          let sumNumbers = convertNum1 + convertNum2;       
          let numberToString = sumNumbers.toString()
          sum.push(numberToString)
        }
      }else{
        if(reverseNum1.length > reverseNum2.legth){
          let diferencaReverse = reverseNum1.length - reverseNum2.legth;
          for(let i = 0; i < diferencaReverse; i++){
            reverseNum2.push('0')
          }
          let convertNum1 = parseInt(reverseNum1[indexNum1]);
          let convertNum2 = parseInt(reverseNum2[indexNum2]);
          let sumNumbers = convertNum1 + convertNum2;       
          let numberToString = sumNumbers.toString()
          sum.push(numberToString)

        }else{
          let diferencaReverse = reverseNum2.length - reverseNum1.legth;
          for(let i = 0; i < diferencaReverse; i++){
            reverseNum1.unshift('0')
          }
          let convertNum1 = parseInt(reverseNum1[indexNum1]);
          let convertNum2 = parseInt(reverseNum2[indexNum2]);
          let sumNumbers = convertNum1 + convertNum2;       
          let numberToString = sumNumbers.toString()
          sum.push(numberToString)
        }
      }
    }
  }

  sum =  sum.reverse().join('');
  
  return sum; 

  
}

console.log(add(1, 18))

