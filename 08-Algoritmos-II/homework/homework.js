'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length <= 1) return array;     // no hay nada que ordenar

  let left = [];
  let right= [];
  let pivote = array.pop();     // agarro el ultimo valor del arreglo
  let myArr = [];            // donde voy a guardar mi array ordenado
   
    for(let i = 0; i < array.length; i++){
      if (array[i] <= pivote ? left.push(array[i]) : right.push(array[i]));   // mejor manera de hacerlo
     /*  if (array[i] <= pivote){          // guardo a izq o der dependiendo si el valor de i es mayor, menor o igual al del pivote
        left.push(array[i]);
      } else {
        right.push(array[i]);
      } */
    }
    return myArr.concat(quickSort(left), pivote, quickSort(right));  // retorno el array ordenado con los valores menores al pivote, el pivote y los valores mayores a este.
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let myArr = [];         // donde voy a guardar el array ordenado

  if(array.length <= 1) return array;     // no hay nada que ordenar
  let half = Math.floor(array.length/2);    // divido el array a la mitad
  let left = mergeSort(array.slice(0, half));     // mitad izquierda
  let right = mergeSort(array.slice(half, array.length));   // mitad derecha

  while (left.length > 0 && right.length > 0) {       // mientras que el largo de ambos arrays sea mayor a cero, ejecuto esto
    myArr.push(left[0] <= right[0] ? left.shift() : right.shift())  // si el valor que esta en 0 del arreglo left es menor o igual al de right, pusheo ese valor al myArr y lo borro del left. Si es mayor, hago lo mismo con el valor de right.  Diccio: ? (si esto es verdad, hago lo siguiente)  :  (si esto no es verdad, hago lo siguiente)
  }
  return myArr.concat(left).concat(right);     // retorno el array concatenado con left y right, que conservan el valor mayor de cada uno

   
  }






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
