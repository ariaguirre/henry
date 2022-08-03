'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  let index = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    suma += Math.pow(2, index) * parseInt(num[i], 10);
    index++;
  }
    return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
let array = [];
do {
  array.unshift(Math.floor(num % 2));
  num = num / 2;
} while (num >= 1);
return array.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}