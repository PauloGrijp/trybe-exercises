function endArray(word, ending){
  let numRemove = word.length - ending.length;
  word = word.split('');
  wordRemove = word.splice(0,numRemove);
  word = word.join(''); 
  
  if(word == ending){
    return true;
  }else{
    return false; 
  }
}

console.log(endArray('trybe', 'be'))
console.log(endArray('joaofernando', 'fernan'))
