/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
  "list": [ { 
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
  },
  {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
]
}
`;
// console.log("jsonString", jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log("data", data);
const list1 = data.list;
// console.log("list", list1);

/* Этап 3. Запись данных в результирующий объект */

let obj = {};

let list = [];

for (let i = 0; i < list1.length; i++) {
  let result = {
    name: list1[i].name,
    age: Number(list1[i].age),
    prof: list1[i].prof,
  };
  list.push(result);
}

obj.list = list;
console.log(obj);
