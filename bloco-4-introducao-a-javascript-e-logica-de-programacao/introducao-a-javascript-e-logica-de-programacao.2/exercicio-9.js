let numbers = [];

for (let index = 0; index < 25; index += 1){
  numbers.push(index + 1)
}

for(let index = 0; index < numbers.length; index += 1){
  let divisionNumbersArray = numbers[index] / 2;
  console.log(divisionNumbersArray);
}