const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

const names = students

    .filter(student => student.score > 50)
    // console.log(names)
    .map(student => (student.score * (10/100) + student.score));
    console.log(names)

let add = names.reduce((arr, num) => arr + num, 0);
console.log(add)



