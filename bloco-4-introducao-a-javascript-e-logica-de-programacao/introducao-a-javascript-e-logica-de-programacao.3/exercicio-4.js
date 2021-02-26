let n = 7;
let asterisk = '';
let tempN = n;


for(let index = 1; index <= n; index += 1){

  asterisk = '';

  if(index < n){
    for(let j = 1; j <= tempN; j += 1){   
      asterisk += '$';
    }
  }else{
    for(let j = 1; j <= tempN; j += 1){   
      asterisk += '*';
    }
  }


  console.log(asterisk); 
  n -= 1;
} 




