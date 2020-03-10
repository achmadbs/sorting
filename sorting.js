const name = ['Orson Milka Iddins', 'Erna Dorey Battelle', 'Flori Chaunce Franzel', 'Odetta Sure Kaspar', 'Roy Ketti Kopfen', 'Madel Bordie Mapplebeck', 'Selle Bellison', 'Leonerd Adda Mitchell Monaghan', 'Debra Micheli', 'Hailey Annakin', 'Leonerd Adda Micheli Monaghan', 'Avie Annakin'];
const list = document.querySelector('p').innerHTML =  name;
const button = document.querySelector('button');
const sorted = document.getElementById('sorted');

const compare = (a, b) => {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA[splitA.length - 1];
  const lastB = splitB[splitB.length - 1];

  if (lastA <= lastB) return -1;
  if (lastA >= lastB) return 1
  return 0;
}

const result = name.sort(compare);

const sorting = () => {
  sorted.innerHTML = result
}

button.addEventListener('click', sorting)

