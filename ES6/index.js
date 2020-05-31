// junio 2015 se crea es6

// old
function newFunction(name, age, country) {
  var name = name || "Edgar";
  var age = age || 26;
  var country = country || "MX";
  console.log(name, age, country);
}

// es6 - Default params
function newFunction2(name = "Edgar", age = 26, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", 32, "CO");

// old
let hello = "Hello";
let world = "World";
let epicLog = hello + " " + world;
console.log(epicLog);

// es6 - Concatenación
let epicLog2 = `${hello} ${world}`;
console.log(epicLog2);

//old
let lorem =
  "Quiero escribir una frase épica \n" + "Otra frase épica que necesitamos.";
console.log(lorem);

//es6 - Muktilinea
let lorem2 = `Otra frase épica que necesitamos 
porque es demasiado grande`;
console.log(lorem2);

//old
let person = {
  name: "Edgar",
  age: "26",
  country: "MX",
};
console.log(person.name, person.age, person.country);

//es6 - Destructuración
let { name, age, country } = person;
console.log(name, age, country);

// Spread Operator
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

// var - disponible globalmente
{
  var globalVar = "Global Var";
}

// let - solo disponible en el bloque donde se usa
{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

// const - permite mantener siempre la asignación original
const a = "b";

//old
let name = "Edgar";
let age = "26";

let obj = { name: name, age: age };
console.log(obj);

//es6 - asignar parámetros en objetos
let obj2 = { name, age };
console.log("Asignando parámetros directamente: ", obj2);

//Arrow Functions
const names = [
  { name: "Edgar", age: 26 },
  { name: "Javier", age: 32 },
];

//es5
let listOfNames = names.map(function (item) {
  console.log(`Opcion ES5 ${item.name} ${item.age}`);
});

//es6 - arrow function
let listOfNames2 = names.map((item) =>
  console.log(`Opcion ES6 ${item.age} ${item.name}`)
);

//es6 - arrow function
const listOfNames3 = (nombre, edad, ciudad) => {
  console.log(nombre, edad, ciudad);
};
listOfNames3("Luz", "24", "CDMX");

//es6 - arrow function
const listOfNames4 = (name, age = "24") => {
  console.log(name, age);
};
listOfNames4("Azyadeth");
listOfNames4("Azyadeth", "25");

//es6 - arrow function
const square = (num) => num * num;
console.log(square(5));

// Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Clases

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// Modulos - Imports
import { hello } from "./module";
hello();

/*GENERATORS
Una funcion generadora puede ser detenida en medio de su ejecución y posteriormente retormarla desde el
punto en que se detuvo. También permiten devolver diferentes resultados, podemos obtener secuencias de
resultados en vez de uno solo son declaradas mediante un * después de la palabra clave function.

Devuelven un objeto sobre el que podemos invocar el método next()

Cada que invocamos next se genera un nuevo objeto con la estructura (value: Any, done: true|false)
La propiedad value es el valor devuelto por la función, mientras que done indica si la función ha dado
por concluida su ejecución yield es la forma de devolver valores dentro de una funcion generadora, de modo
que al devolver un valor, la ejecución para hasta que next se vuelva a llamar
*/

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
