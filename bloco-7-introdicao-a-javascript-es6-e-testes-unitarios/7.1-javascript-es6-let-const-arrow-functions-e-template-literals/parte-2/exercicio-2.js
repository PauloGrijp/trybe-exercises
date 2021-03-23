const bigWord = text => {
  let wordArr = text.split(' ')
  let max = 0
  let result = ''

  for (const word of wordArr) {
      if (word.length > max) {
          max = word.length
          result = word
      }
  }

  return result
}

console.log(bigWord("Antonio foi no banheiro e não sabemos o que aconteceu"))