const age = 45;
const calification = 69;

if(age >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

if (calification >= 90) {
  console.log("A");
} else if (calification >= 80 && calification < 90) {
  console.log("B");
} else if (calification >= 70 && calification < 80) {
  console.log("C")
} else {
  console.log("Reprobado !!")
}

const operation = "add";
let n1 = 80;
let n2 = 60;

switch(operation){
  case "add": {
    console.log(n1 + n2);
    break;
  }
  case "subs": {
    console.log(n1 - n2);
    break;
  }
  default:{
    console.log("Operación no válida");
    break;
  }
}