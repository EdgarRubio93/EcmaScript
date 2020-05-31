// junio 2018 se creo es9

// Operador de reposo
const obj = {
  name: "Edgar",
  age: "26",
  country: "MX",
};

// name está abstraido, all está encapsulado.
let { name, ...all } = obj;

console.log(name); //propiedad abstraida
console.log(all); //objeto restante

// Operador de propagación

const obj1 = {
  ...obj,
  hobbie: "Futbol",
};

console.log(obj1);

// Promise.finally - saber cuando ha terminado el llamado y ejecutar lógica

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

// Regex data
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
