let n = 5;
let asterisk = '';
let tempN = n;
let base = n;




for(let index = 1; index <= n; index += 1){

  asterisk = '';

  if(index < n){

    for(let j = 1; j <= tempN; j += 1){
      
      if(j == tempN - (tempN - 1) || j == tempN){
        asterisk += ' ';
      } else{
        asterisk += '*';
      }    
    }
  }else{
    for(let j = 1; j <= base; j += 1){   
      asterisk += '*';
    }
  }
  
  console.log(asterisk); 
  n -= 1;
} 




