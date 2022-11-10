// job with arrays
const arr = [1, 2, 3, 4];

// add elements
arr.push("10", 54); // добавляет элементы в конец
console.log(arr);

// remove elemets
arr.splice(1, 2); // удаляет два лемента начиная с 1 индекса 
console.log(arr);

arr.splice(0, 1, "25", 200); // удаляет элемент по индексу 0 и добавляет элементы "25" и 200
console.log(arr);

arr.splice(2, 0, 67, "blackForest");
console.log(arr);

// indexOf - return index of elements in array
const index = arr.indexOf(200);
const lindex = arr.lastIndexOf(67);
console.log(index);

const cats = [
    {
        color: 'gray',
        age: 5,
    },
    {
        color: 'gray',
        age: 8,
    },
    {
        color: 'white-black',
        age: 15,
    },
    {
        color: 'yellow',
        age: 2,
    },
];

// вывести всех котов серого цвета
const fCats = cats.filter((cat) => cat.color == 'gray');
console.log(fCats);

cats.filter((cat) => cat.color == 'gray').
    forEach(console.log);

// вывести массив содержащий возраста всех серых котов
const aCats = cats.filter((cat) => cat.color == 'gray').
    map((cat) => cat.age);
console.log(aCats);

// вывести средний возраст всех серых котов
const avgAge = cats.filter((cat) => cat.color == 'gray')
    .map((cat) => cat.age)
    .reduce((p, c, index, arr) => p + c / arr.length, 0);
console.log(avgAge);

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
console.log(set);

const map = new Map();
map.set(1, 'value');
map.set([2], 'sweep');
map.set(3, 'black');
map.set(1, 'value');
console.log(map);
console.log(map.get(3));

// форматирование строк
console.log('Hello' + 10);

const name = 'Viktor';
const age = 45;
console.log(`My name is ${name}. Im ${age} years old!`);
    
// 
const undf = undefined;
const nul = null;
const inf = Infinity;
const m = NaN;

let b = 100;
// false = null, undefind, NaN, 0, "empty", false
if (b) {
    console.log('wtf?');
}

b = [];
if (b) {
    console.log('yes');
}

b = ``;
if(b) {
    console.log('yes');
}

console.log(`10` !== 10);

// == - сравнивает только занчения без сравнения типа
// === - сравнивает и значение и тип
// !== - -//-

// диалогтвые окна
alert("text for user");

const answer = confirm('Do you want drink a beer?');
console.log(answer);

const data = prompt('Enter you last three number on your card');
console.log(data);
