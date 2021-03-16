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
  dados.classList.add('save-dados')
  for (let i = 0; i < input.length; i += 1) {
    const newPara = document.createElement('p');
    newPara.innerText = input[i].value
    dados.appendChild(newPara);


    // if (label[i].innerText === 'Tipo') {
    //   for (let j = 0; j < radioChecked.length; j += 1) {
    //     if (radioChecked[j].checked) {
    //       const newPara = document.createElement('p');
    //       newPara.innerText = `${label[i].innerText}: ${radioChecked[j].value}`
    //       dados.appendChild(newPara);             
    //     }
    //   }
    // } else if (label[i].innerText === 'Data de início') {
    //     let data = date.value.split('/');
    //     let dia = data[0];
    //     let mes = data[1];
    //     let ano = data[2]; 
    //     if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0) {
    //       alert('Prencha corretamente os dados');
    //       console.log(dia, mes, ano)
    //     } else {
    //       const newPara = document.createElement('p');
    //       newPara.innerText = `${label[i].innerText}: ${input[i].value}`
    //       dados.appendChild(newPara);
    //     }
    // } else if (label[i].innerText === 'Estado') {        
    //     const newPara = document.createElement('p');
    //     const textSelected = select.options[select.selectedIndex].text;
    //     newPara.innerText = `${label[i].innerText}: ${textSelected}`
    //     dados.appendChild(newPara);
    // } else if (label[i].innerText === 'Resumo do currículo') {
    //     const newPara = document.createElement('p');
    //     newPara.innerText = `${label[i].innerText}: ${textArea.value}`
    //     dados.appendChild(newPara); 
    // } else {
    //     const newPara = document.createElement('p');
    //     newPara.innerText = `${label[i].innerText}: ${input[i].value}`
    //     dados.appendChild(newPara); 
    // }        
  }    
})
}
saveForm();

function clearForm(){
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  dados.classList.remove('save-dados')
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
