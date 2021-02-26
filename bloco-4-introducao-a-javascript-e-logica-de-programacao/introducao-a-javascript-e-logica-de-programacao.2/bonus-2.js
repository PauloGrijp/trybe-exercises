let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 1; index < numbers.length; index += 1){
  for(let indexOrder = 0; indexOrder < index; indexOrder += 1){
    if(numbers[index] > numbers[indexOrder]){
      let sortNumber = numbers[index];
      numbers[index] = numbers[indexOrder];
      numbers[indexOrder] = sortNumber;
    }
  }
}

console.log(numbers);