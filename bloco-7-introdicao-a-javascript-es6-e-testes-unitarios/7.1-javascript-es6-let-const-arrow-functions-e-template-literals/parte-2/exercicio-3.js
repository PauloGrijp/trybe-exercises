const number = document.querySelector('.number');
const btn = document.getElementById('btn');
let addNum = 0;

btn.addEventListener('click', () => {
  addNum += 1
  number.innerText = addNum
})