// junio 2016 se crea es7

// includes - El método includes() determina si una matriz incluye un
// determinado elemento, devuelve true o false según corresponda.
const numbers = [1, 3, 4, 5, 7, 8];

const validarNumero = (numbers) => {
  if (numbers.includes(9)) {
    console.log("Incluye el número 7");
  } else {
    console.log("No se incluye");
  }
};
validarNumero(numbers);

// como elevar una potencia
let base = 4;
let exponente = 3;
let result = base ** exponente; // x a la potencia y
console.log(result);
