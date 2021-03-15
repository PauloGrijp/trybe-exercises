
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
