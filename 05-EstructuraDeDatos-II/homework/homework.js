"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    this.head = null;     // el head inicialmente no apunta a nadie
    this._length = 0;     // voy contando el length asi, en caso de ser necesario, no tengo que recorrer todo el arreglo para contarlo
  }
  LinkedList.prototype.add = function(data){
    let node = new Node(data);    //valor que quiero insertar dentro de mi lista. node.value=data // node.next = null
    let current = this.head;    //current pasa a ser next, y conoce quien es next y si es null o tiene un valor asosciado. 
    if (!current) {           // si el current es null, no hay ningun nodo definido. La lista esta vacia
      this.head = node;     // como no hay nada definido, head ahora es el nodo. 
      this._length++;       // incremento el length ya que agregue un nuevo nodo.
      return node;
    } // quiero trabajar hasta que current.next sea null   
    while (current.next) {    // Mientras haya un current.next
      current = current.next;   // avanzo el current. Se corta la ejecucion cuando ya no hay current.next (estamos en el ultimo nodo).
    }
    current.next = node;    // una vez que estoy en el ultimo nodo, añado el nuevo nodo, es decir, es nodo = current.next
    this._length++;   //incrementa porque se añade un nuevo nodo
    return node;
  }
  LinkedList.prototype.remove = function(){
    let current = this.head;
    if(this._length === 0) return null;     // si no hay elementos en la lista, return null;
    else if(this._length === 1) {
      let aux = current.value;    //guardo el valor del nodo que voy a borrar en una aux, para poder retornarlo al final
      this.head = null;
      this._length--;
      return aux;     // devolvemos el valor del nodo que eliminamos
    }   //mira dos elementos mas adelante, no avanza
    while (current.next.next) {     //si el proximo del proximo elemento, yo ya se que el que me sigue es el ultimo elemento
        current = current.next;     //por ende, yo ya se que mi next (parada en current) va a valer null (porque lo voy a remover)
      }
      let aux = current.next.value;
      current.next = null;
      this._length--;
      return aux; 
    }

    // if(!this.head) return null;   // ! --> lista vacia
    // if(this.head && !this.head.next){     //si el nodo esta ocupado y la proxima propiedad es null (!) --> la lista tiene solo un elemento
    //   let rmNode = this.head;     // guardamos una referencia del elemento que vamos a borrar
    //   this.head = null;           // borramos head, esta vacia
    //   return rmNode.value;        // retornamos el valor del nodo que borramos
    // }
    // let current = this.head;      // si la lista tiene muchos valores
    // while (current.next.next) {
    //   current = current.next;     //dos en frente, avanza de a uno
    // }
    // let rmNode = current.next;
    // current.next = null;
    // return rmNode.value;

  LinkedList.prototype.search = function(value){      // me mandan a buscar si el valor 7 esta en la lista
    if (!this.head) return null;    //si la lista esta vacia, retorno null;
    let current = this.head;
    while (current) {               // si hay algo en el current
      if(current.value === value) return current.value;   // si el valor del current es = al que estoy buscando, lo retorno.
      else if(typeof (value) === 'function') {    // si el valor que me pasaron era una funcion
        if(value(current.value)) return current.value;  // evaluo el elemento sobre el cual estoy parado con esa funcion, si devuelve un valor booleano true, encontre el elemento, sino no. Por ejemplo, value(6) --> si es igual, retorna true.
        }
        current = current.next;     //en caso de que no se cumplan ninguno de estos dos casos, avanzo a ver si el prox nodo lo cumple.
      }
      return null;      //si el valor no estaba en la lista, retorno null(no está)
    }

class Node{
  constructor(data){
    this.value = data;
    this.next = null;

  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;     // el numero de buckets es 35
  this.buckets = [];      // arreglo de buckets
}
HashTable.prototype.hash = function(key){        // recibe una palabra, la funcion hasheadora solo retorna la posicion en la que se va a guardar el valor
  let sum = 0;      // contador para ir guardando la suma
  for (let i = 0; i < key.length; i++ ) {   //recorro los caracteres de la key para ir sumando el valor de cada caracter. Por ej, i recorre cada caracter de "hola"
    sum += key.charCodeAt(i);           // a la suma le agrego el valor de la letra en la posicion i, charCodeAt retorna el valor unico de la palabra (valor predeterminado)    
  }
  return sum % this.numBuckets;     // esta funcion hasheadora deberia sumar los key code de las letras de la palabra, y hacer el mod de ese numero por el numero de buckets .
};


HashTable.prototype.set = function(key, value){   //seteamos el valor del key en el bucket, para prevenir colisiones, lo guardamos como propiedad de un obj
  if(typeof key !== "string") throw new TypeError("Key must be strings");   // si el tipo de dato no es un string, que tire error con ese mensaje
  let i = this.hash(key);       //invocamos a la funcion hash que creamos para que retorne la posicion en la que se encuentra el key. 
  if(this.buckets[i] === undefined) {
    this.buckets[i] = {};     // si no hay nada en el bucket, creo un objeto
  }
  this.buckets[i][key] = value;   //voy a la posicon de i, si no esta el key, lo crea y le agrega el valor designado al key.
};

HashTable.prototype.get = function(key){    // busca el valor de la posicion, recibo la key del valor que quiero getear
  let i = this.hash(key);     //busco el bucket en el que esta mi key
  return this.buckets[i][key];    //voy a la posicion y me da el valor del elemento que pido
};
HashTable.prototype.hasKey = function(key){   //me pregunta si ya lo tengo almacenado
  let i = this.hash(key);     //veo a donde tengo que ir a buscar el valor de key
  return this.buckets[i].hasOwnProperty(key);    // hasOwnProperty retorna true o false si determinada posicion tiene determinada propiedad.
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
