let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for(let index = 0; index < numbers.length; index += 1){
  if(index != (numbers.length - 1)){
    let multiplied = numbers[index + 1] * numbers[index]
    numbersMultiplied.push(multiplied);
  }else{
    multiplied = numbers[numbers.length - 1] * 2;
    numbersMultiplied.push(multiplied)
  }
}

console.log(numbersMultiplied);