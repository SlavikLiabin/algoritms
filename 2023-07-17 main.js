// const newArr = [];
// for (let i in arr) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
// for (let i in arr) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

// перепишем на функцию высшего порядка

// первый случай - функция принимает в качестве аргумента дургую функцию
// const names = ["Sveta", "Maksim", "Petr", "Ivan"];

// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength(el){
//     return el.length;
// }

// function nameToUpperCase(el){
//     return el.toUpperCase();
// }
// const result = mapArray(names, nameLength)
// const result2 = mapArray(names, nameToUpperCase)

// console.log(result)
// console.log(result2)

// второй случай - функция возвращает другую функцию

// function greeting(firstName) {
//     return function (lastName) {
//         return `Hello, ${firstName} ${lastName}`;
//     }
// }

// const fullName = greeting('Denis')('Ivanov');

// console.log(fullName)

// некоторая отвлеченная функция

// function question(job){
//     const dictionary = {
//         developer: "How are you?",
//         teacher: "What are you doing now?"
//     }

//     return function(name){
//         return `${name}, ${dictionary[job]}`
//     }
// }

// const developerQuestion = question('developer');
// console.log(developerQuestion('Petr'))

// const teacherQuestion = question('teacher');
// console.log(teacherQuestion('Simona'))

// контекст вызова this

// const carToyota = {
//     label: 'Toyota',
//     model: 'Mark',
//     price: 1000,
//     // getPrice
// }

// const {label: name, model, price} = carToyota;

// console.log(name)

// let carNissan = {
//     label: 'Nissan',
//     model: 'Sunny',
//     price: 500,
//     getPrice
// }

// function getPrice(){
//     console.log(this.price)
// }

// carNissan.getPrice()

// arrow functions

// const plus = (x, y) => x + y;

// const plusRes = plus(2,3)

// console.log(plusRes)

// const withoutVar = () => console.log('hello')

// withoutVar()

// const foo = (a = 10, b = 34) => a + b;

// const res = foo()

// console.log(res)
// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };

// const returnObj = (str = '') => ({
//     value: str,

//     length: str.length,
// })

// const arrFunc = (x, y) => {
//     console.log (`${x + y}`)
// }

// arrFunc (2, 3)

// const plus = (x = 0, y = 0) => x + y;

// отличия
// нет arguments
// не имеют собственного контекста

// перебирающие методы массивов

// const users = [
//   {
//     id: 14789632,
//     name: "Daniil",
//     age: 7,
//     city: "Tula",
//     balance: 5468,
//   },
//   {
//     id: 4789652,
//     name: "Artemiy",
//     age: 4,
//     city: "London",
//     balance: 1478,
//   },
//   {
//     id: 258963,
//     name: "Kirill",
//     age: 12,
//     city: "Satka",
//     balance: 8965,
//   },
//   {
//     id: 14785236,
//     name: "Anton",
//     age: 2,
//     city: "Rostov",
//     balance: 2365,
//   },
// ];

// users.forEach((user) => console.log(user.age * 2))

// const userLess5 = users.filter((user) => user.age < 5);

// console.log(userLess5)

// const usersName = users.map((user) => ({name: user.name, age: user.age}));

// console.log(usersName)

// const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0)

// console.log(totalBalance)

// const userObj = users.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
// }, {});
// console.log(userObj)

// копирование объекта


// let fromEntries = Object.fromEntries([['a', 'some value'], ['b', 'other text']]);
// console.log(fromEntries)

const div = document.querySelector('div');
console.dir(div)
