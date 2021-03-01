function bigCharacters(array){
  let bigWord = array[0];

  for(let index in array){
    if(bigWord.length < array[index].length){
      bigWord = array[index];
    }else{
      bigWord = bigWord;
    }
  }

  return bigWord;
}

console.log(bigCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))