function question(job) {
  const jobDictionary = {
    developer: "что такое JavaScript",
    teacher: "какой предмет вы ведете",
  };

  return function (name) {
    return `${name}, ${jobDictionary[job]} ?`;
  };
}

const developerQestion = question("developer");
console.log(developerQestion("Petr"));
