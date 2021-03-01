function bigValueInArray(array){
  let bigNum = array[0];

  for(let index in array){
    
    if(bigNum < array[index]){
      bigNum = array[index];  
    }else{
      bigNum = bigNum;
    }
  }  


  return array.indexOf(bigNum);
}

console.log(bigValueInArray([2, 3, 6, 7, 10, 1]))