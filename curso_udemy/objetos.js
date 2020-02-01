// Existen diferentes formas de crear un objeto, un objeto está representado por un key y un value

{
  name: 'Juan'
}

const person = {
  name: 'Juan',
  lastname: 'Morales',
  getFullName() {
    return this.name + " " + this.lastname;
  }
}

console.log(person.name);
console.log(person["lastname"]);
console.log(person);
console.log(person.getFullName());

class Person {
  constructor(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}

const person2 = new Person("Juan");
let name = person2.getName();
console.log(name);