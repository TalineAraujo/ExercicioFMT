// Descrição exercicio 01
// Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.

// ‌

// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.


// let frutas = ["Morango", "Uva", "Abacate"]
// console.log(frutas[1])

//resolução prompt-sync

const prompt = require("prompt-sync")()
const frutas = []

for(let i = 0; i < 3; i++){
    frutas.push(prompt("Digite o nome de três frutas: "))

}

console.log(frutas[1])


// Descrição exercicio 02
// Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

frutas.push(prompt("Digite uma fruta adicional: "))

frutas.shift()

console.log(frutas)