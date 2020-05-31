// junio 2019 se creo es10

// flat():
// rea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la
// profundidad especificada.
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());

// flatMap():
// Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz.

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap((value) => value * 2));

// trimStart()
// Eliminar espacios al inicio de un text

let hello = "    hello";

console.log(hello);
console.log(hello.trimStart());

// trimEnd()
// Eliminar espacios al final de un text

let bye = "bye      ";

console.log(bye);
console.log(bye.trimEnd());

// fromEntries()
// Transforma una lista de pares con [clave-valor] en un objeto. Arreglo -> Objeto
let entries = [
  ["name", "oscar"],
  ["age", "32"],
];

console.log(Object.fromEntries(entries));

// Symbol()
// Permite acceder a una descripción

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
