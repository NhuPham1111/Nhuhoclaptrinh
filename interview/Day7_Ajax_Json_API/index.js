// JSON string → JavaScript object
const jsonString = '{"name":"An","age":20,"isStudent":true}';
const student = JSON.parse(jsonString);

console.log(student.name); // An
console.log(student.age); // 20

// JavaScript object → JSON string
const person = {
  name: "Binh",
  age: 22,
  isStudent: false,
};

const personJson = JSON.stringify(person);
console.log(personJson); // {"name":"Binh","age":22,"isStudent":false}
