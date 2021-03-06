let n = 5;

let asterisk = '';
let tempN = n

for(let index = 1; index <= tempN; index += 1){
  asterisk = '';
  for(let j = 1; j <= tempN; j += 1){

    if(j < n){
      asterisk += ' ';
    }else{
      asterisk += '*';
    }  

  }  
  console.log(asterisk)
  n -= 1
  
}

