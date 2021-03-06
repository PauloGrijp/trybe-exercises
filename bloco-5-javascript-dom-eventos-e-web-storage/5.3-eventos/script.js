function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function days(){
  const days_ul = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for(let index of dezDaysList){
    const listDays_li = document.createElement('li');
    listDays_li.className = 'day';
    listDays_li.innerText = index;
    if (index === 24 || index === 25 || index === 31) {
      listDays_li.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25) {
      listDays_li.classList.add('friday');
    }
    days_ul.appendChild(listDays_li);
  }; 
};
days()

function holiday(feriados){
  const buttonsContainer = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button'); 
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = feriados;
  buttonsContainer.appendChild(btnHoliday);

  btnHoliday.addEventListener('click', function () {
    
  })
};
holiday('Feriados');
