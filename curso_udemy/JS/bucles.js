// Bucles: son iteradores que nos permite recorrer cada elemento de una colección.

const fruits = ['apple','melon','lemon','mango'];

// For tradicional
console.log("For Tradicional");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For of
console.log("For Of");
for(const fruit of fruits){
  console.log(fruit);
}

const people = [{name: 'Sara'},{name: 'María'}];

// For In
console.log("For In");
for(const p in people){
  console.log(people[p].name);
}

// While
console.log("While");
let iterator = 0;
while(iterator<people.length) {
  console.log(people[iterator]);
  iterator++;
}

// Do While
console.log("Do While");
let i = 0;
do{
  console.log(people[i]);
  i++;
}while(i < people.length);