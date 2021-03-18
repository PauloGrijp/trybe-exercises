const save = document.getElementById('save');
const dados = document.getElementById('dados');  
const input = document.querySelectorAll('input');
const para = document.querySelectorAll('p');
const label = document.querySelectorAll('label')
const select = document.querySelector('select');
const date = document.getElementById('date');
const textArea = document.getElementById('resume')

function saveForm() {
save.addEventListener('click', (e) => {
  e.preventDefault();
  
  for (let i = 0; i < label.length; i += 1) {
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
addStates();

var picker = new Pikaday({
  field: date,
  format: 'D/M/YYYY',
  toString(date, format) {      
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {     
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }});
  