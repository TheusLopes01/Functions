/*
Function() constructor

* expressão new
* criar um novo objeto
* this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const theus = new Person("Theus")
const joao = new Person("Joao")
console.log(theus.walk())
console.log(joao.walk())
