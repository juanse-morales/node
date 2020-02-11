// Colecciones: un array es un tipo de dato que contiene varias informaciones organizada de forma secuencial.
// Los Array pueden almacenar cualquier tipo de valor, admitidos por javascript

const fruits = [
  "apple", 
  "melon", 
  "mango", 
  function(){ 
    console.log("Hola");
    return 1;
  }
];

console.log(fruits[3]());

// Set

const numbers = new Set(); // No admite valores repetidos
numbers.add(5);
numbers.add(5);
numbers.add(6);

console.log(numbers);

// Map

const students = new Map(); // Admite un diccionario
students.set("one","Juan");

console.log(students.get("one"));