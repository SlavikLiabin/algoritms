/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelectorAll("name");
const firstNode = listNode.querySelectorAll("first");
const secondNode = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");

/* Этап 3. Запись данных в результирующий объект */
let obj = {};
let list = [];

for (let i = 0; i < firstNode.length; i++) {
  let langAttr = nameNode[i].getAttribute("lang");

  let result = {
    name: firstNode[i].textContent + " " + secondNode[i].textContent,
    age: Number(ageNode[i].textContent),
    prof: profNode[i].textContent,
    lang: langAttr,
  };
  list.push(result);
}

obj.list = list;
console.log(obj);
