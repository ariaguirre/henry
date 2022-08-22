"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null; 
}

BinarySearchTree.prototype.size = function(){
  if (this.value === null) return 0;
  if (this.left === null && this.right === null) return 1;
  if(this.left === null && this.right !== null) return 1 + this.right.size();    // 1 por el nodo y recursion
  if(this.right === null && this.left !== null) return 1 + this.left.size();    // 1 por el nodo y recursion
  return 1 + this.right.size() + this.left.size();    // recursion a la derecha y a la izquierda 
};

BinarySearchTree.prototype.insert = function(value){
  if (value > this.value) {
    if (this.right === null) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }  
    if (value > this.value) {
    if (this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
};
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if (value > this.value) {
    if (this.right === null) return false;   
    return this.right.contains(value);       
  }
  if (value < this.value) {
    if (this.left === null) return false;    // si esta vacio retornar falso
    return this.left.contains(value);       //si no esta vacio --> recurison
  }
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if (orden === 'post-order') {

  }
  else if (orden === 'pre-order') {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, orden)
    if (this.right !== null) this.right.depthFirstForEach(cb, orden)
  }
  else {
    if (this.left !== null) this.left.depthFirstForEach(cb, orden)
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden)
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  if (this.left !== null) queue.push(this.left);
  if (this.right !== null) queue.push(this.right);
  cb(this.value);
  if(queue.length > 0) {
    queue.shift().breadthFirstForEach(cb, queue);
  } 
  }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
