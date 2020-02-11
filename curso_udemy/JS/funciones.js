// Funciones: Es un trozo de código que se usa varias veces
// un Parametro no es mas que un valor que la función recibe para luego procesar su información o realizar un cálculo.

function greet(name){
  console.log("Hi "+name);
}

console.log(greet("Sara"));

function calc(n1,n2){
  console.log(n1+n2);
}

console.log(calc(2,2));

// Las funciones son una expresión, que al fin al cabo, podemos almacenarla, pasarla como parametro a otra función

function greet2(name){
  console.log("Hi "+name);
}

function logGreeting(fn){
  fn('Juan');
}

logGreeting(greet2);

const greetMe = function(name){
  console.log(`Hola ${name}`);
}

greetMe('Juanse');

// Arrow Function

const greetMe2 = (name) => console.log(`Hola ${name}`)

greetMe2('Sara');