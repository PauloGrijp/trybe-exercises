const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer = (correctAnswer) => {
 return (userAnswer) => {
   return correctAnswer === userAnswer.toLowerCase();
  }
}

console.log(checkAnswer(CORRECT_ANSWER)(USER_ANSWER));