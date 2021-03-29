const random = () => {
  return Math.ceil(Math.random() * 5)
}

const result = (random, myNum) => {
  return random === myNum ? 'Parabéns você ganhou' : 'Tente novamente' 
} 

console.log(result(random(), 5))