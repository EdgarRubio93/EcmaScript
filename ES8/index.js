// junio 2017 se crea es8

// Object.entries():
// Devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado.
// Objeto --> Arreglo
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object.values():
// Devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const value = Object.values(data);
console.log(value);
console.log(value.length);

// padStart():
// Rellena la cadena actual con una cadena dada, el relleno es aplicado desde el inicio (izquierda).

const string = "hello";

console.log(string.padStart("8", "hi "));

// padEnd():
// Rellena la cadena actual con una cadena dada, el relleno se aplica desde el final

console.log(string.padEnd("12", " -----"));

// Async - Await

const helloWorld = (value) => {
  return new Promise((resolve, reject) => {
    value.includes("a")
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

// es8
let vowels = ["a", "e", "i", "o", "u"];
const helloAsync = async () => {
  const hello = await helloWorld(vowels);
  console.log(hello);
};

helloAsync();

// Async - Await - Manejando Errores

let letters = ["b", "e", "i", "o", "u"];
const anotherFunction = async () => {
  try {
    const hello = await helloWorld(letters);
    console.log(hello);
  } catch (error) {
    console.log("Falló!");
  }
};

anotherFunction();
