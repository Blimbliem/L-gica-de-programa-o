let numero = "1"
console.log(numero == 1)
console.log(numero === 1)

// = é uma atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo


//Guardar os valores em uma variavel de resultado TRUE/FALSE
let marca = "Apple"
resultado = marca !=="Samsung"

console.log(resultado)

// !== é para diferenciar


let cpfBloqueado = "123.456.789.12"
let cpfUsuario = "123.456.789.32"
let ehCpfBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuário está barrado? " + ehCpfBloqueado)

let cpfPermitido = "321.654.987.85"
let cpfUsuario2 = "123.456.987.87"

let ehCpfBloqueado2 = cpfPermitido !== cpfUsuario2
console.log("É um usário invalido? " + ehCpfBloqueado2)

//maior ou igual
let idadeMinima = 18
let idadeUsuario = 17

let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)
// menor ou igual
let idadeDeCorte = 50
let idadeAluno = 50
let matriculaValida = idadeDeCorte <= idadeAluno

console.log(matriculaValida)

