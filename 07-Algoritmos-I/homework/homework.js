'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let i = 2;
  while (num !== 1){      // mientra sea distinto de 1, segui trabajando
    if(num % i === 0){    // si el resto es cero (modulo)
      array.push(i);      // pushea el numero por el que se dividio 
      num = num/i;        
    } else {
      i++;                // si el resto no es cero, i++
    }
  }
  return array;
}



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let swap = true;
  while(swap){        //mientra se pueda, swapea
    swap = false;
    for (let i = 0; i < array.length - 1; i++){      // i se compara con el proximo (i+1). Es length-1 porque cuando i llegue al ultimo elemento del array, se compararia con uno que no existe (i+1)
      if (array[i] > array[i + 1]){           // si i es mayor al de al lado
        let aux = array[i];               // antes de modificar el valor de i, guardalo en una auxiliar
        array[i] = array[i + 1];          // se intercambian, hacen swap
        array[i + 1] = aux;
        swap = true;                      // permito volver a swapear
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Avanzo hacia la izquierda x posiciones hasta que encuentre uno mas chico que yo
  // Devolver el array ordenado resultante
  // Tu código:

// 9 6 2 1 10 0 3         Asi empieza
//   i                    i empieza en 1 porque tiene que comparar con el de la izq (j)
// j

  for(let i = 1; i < array.length; i++){
    let j = i - 1;                        // j = el de la izq de i
    let aux = array[i];
    while(j>=0 && array[j] > aux){        // en el caso inicial, array[j] esta en posicion 0 y es mayor a array[i] (9 > 6)
    array[j+1] = array[j];              // hacen swap. array[j] pasa a la posicon de array[i] (j+1)
    j--;
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  /*
  9 6 2 1 10 0 3
             m              m = valor minimo. Cada vez que se resetea i, el siguiente valor es el minimo
               i            siempre se compara i con m. i siempre busca si hay otro valor minimo
  j                         j = posicion a la que iria el numero, siempre se va sumando uno porque avanza la posicion.
  */

  for(let j=0; j < array.length-1; j++){        //es length-1 porque ya se que el ultimo queda ordenado
    let min = j;
    for(let i=j+1; i < array.length; i++){      //i=j+1 --> se para una posicion mas adelante
     if(array[i] < array[min]){                 
      min = i;                                  //se redefine el minimo
  }
}  if(j!==min){                    // si fuese el minimo, no se tendria que mover (?)
    let aux = array[j];           // aux es el numero en el que esta j (guarda la referencia)
    array[j] = array[min];        //j pasa a ser el minimo (0)
    array[min] = aux;             // el numero en el que estaba el minimo, pasa a ser j (9 y 0 hacen swap)
  }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
