function smallValueInArray(array){
  let smallNum = array[0];

  for(let index in array){
    
    if(smallNum > array[index]){
      smallNum = array[index];  
    }else{
      smallNum = smallNum;
    }
  }  


  return array.indexOf(smallNum);
}

console.log(smallValueInArray([2, 3, 6, 7, 10, 1]))