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
console.log(allLessons)