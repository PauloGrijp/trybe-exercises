
function moreRepeated(numbers) {

  let num = {};

  for(let index = 0; index < numbers.length; index += 1){
    if(num[numbers[index]] === undefined){
      num[numbers[index]] = 1;
    }else{
      num[numbers[index]] += 1
    }
  }

  let count = num[Object.keys(num)[0]]
  let finalNum = Object.keys(num)[0];
  for(let key in num){
    if(count < num[key]){
      count = num[key]
      finalNum = key
    }else{
      count = count
      finalNum = finalNum;
    }
  }  
  return finalNum;
  
}

console.log(moreRepeated([2, 3, 2, 5, 8, 2, 3])); //2

//REFERENCIA

//Gabarito