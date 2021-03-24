const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



const addTurno = (object, key, value) => object[key] = value;
addTurno(lesson2, 'turno', 'manhã')

const viewKeys = obj => Object.keys(obj)
viewKeys(lesson2);

const lengthObj = obj => Object.keys(obj).length;
lengthObj(lesson1)

const valueObj = obj => Object.values(obj)
valueObj(lesson3)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalStudents = obj => {
  let total = 0
  const arrayObj = Object.keys(obj)
  for (let keys in arrayObj) {    
    total += obj[arrayObj[keys]].numeroEstudantes;  
  }  
  return total;
}
totalStudents(allLessons)

const valueKey = (obj, pos) => Object.values(obj)[pos];
valueKey(lesson1, 0)

const validatedObj = (obj, key, value) => {
  let igual = false;
  for (let keys in obj) {
    if (keys === key && obj[keys] === value) {
      igual = true;
    } 
  }

  return igual;
}

console.log(validatedObj(lesson3, 'materia', 'Matemática'))
