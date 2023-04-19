// functions expression
// functions anonymous

// parâmetros (parameters)
const sum = function (number1, number2) {
  //console.log(number1 + number2)
  total = number1 + number2
  return total
}

//sum(2, 3) // arguments - argumentos
//sum(4, 5)
//sum(56, 65)
let number1 = 34
let number2 = 25
//sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`o número 1 é ${number1}`)
console.log(`a soma é ${sum(number1, number2)}`)

// a função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco("banana", "maçã")

console.log(copo)

function baterBolo(massa, recheio) {
  return massa + recheio
}

const forma = baterBolo("massa", "recheio")

console.log(forma)
