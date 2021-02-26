let n = 5;
let asterisk;

for(let column = 1; column <= n; column += 1){
  asterisk = '';
  for(let line = 1; line <= n; line += 1){
    asterisk+= '*';
  }
  console.log(asterisk)
}