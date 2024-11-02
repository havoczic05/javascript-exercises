const sumAll = function (...args) {
  if (args[0] < 0 || args[1] < 0 ||
    !Number.isInteger(args[0]) || !Number.isInteger(args[1]) ||
    isNaN(args[0]) || isNaN(args[1])) {
    return "ERROR";
  } {
    let sum = 0;
    if (args[0] > args[1]) {
      for (let i = args[1]; i <= args[0]; i++) {
        sum += i;
      }
    } {
      for (let i = args[0]; i <= args[1]; i++) {
        sum += i;
      }
    }
    return sum
  }
};

// Do not edit below this line
module.exports = sumAll;


/*
function(a,b)
crear un array vacio
ver cual de los 2 valores es menor e ir sumando 1 hasta llegar al mayor
agregar cada valor al array vacio, incluido a y b
sumar todos los valores del array
retornar la suma


*/
