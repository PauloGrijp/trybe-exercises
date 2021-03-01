function verificaPalidrome(word){
  let tempWord = word.split('').reverse().join('');

  if(word == tempWord){
    return true;
  }else{
    return false;
  }
}

console.log(verificaPalidrome('arara')) 
console.log(verificaPalidrome('desenvolvimento')) 


// REFERENCIAS

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split#revertendo_uma_string_usando_split