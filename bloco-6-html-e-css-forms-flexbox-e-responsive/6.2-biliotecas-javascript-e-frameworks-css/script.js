const save = document.getElementById('save');
const dados = document.getElementById('dados');  
const input = document.querySelectorAll('input');
const para = document.querySelectorAll('p');
const label = document.querySelectorAll('label')
const select = document.querySelector('select');
const radioChecked = document.getElementsByName('type');
const date = document.getElementById('date');
const textArea = document.getElementById('resume')

function saveForm() {
save.addEventListener('click', (e) => {
  e.preventDefault();
  
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].type === 'radio' && !input[i].checked) {
      continue
    }
    const newPara = document.createElement('p');
    newPara.innerText = input[i].value
    dados.appendChild(newPara);   
  }    
})
}
saveForm();

function clearForm(){
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {  
  for (let i = 0; i < input.length; i += 1){
    input[i].value = '';
  }
  document.getElementById('resume').value = ''
  for (let i = 0; i < para.length; i += 1) {
    while (dados.firstChild) dados.removeChild(dados.lastChild);      
  }
})

}
clearForm()


function addStates() {
const state = document.getElementById('state');
const arrayStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
for (let i = 0; i < arrayStates.length; i += 1) {
  const createStates = document.createElement('option');
  createStates.innerText = arrayStates[i];
  createStates.setAttribute('value', arrayStates[i].toLowerCase())
  state.appendChild(createStates)
}
} 
addStates()


