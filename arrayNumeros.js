// Descrição exercicio 03

// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
    const numero = parseInt(prompt(`Digite o ${i + 1} números: `))
    numeros.push(numero)

}


for(let i = 0; i < 5; i++){
    console.log(`o ${i + 1} número é ${numeros[i]}`)

}

// Descrição exercicio 04

// Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

const soma = numeros.reduce((acumulador, numeroAtual) =>{
    return acumulador + numeroAtual
},0)

console.log("A soma dos números é: ", soma)

// Descrição exercicio 05

// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const numerosOrdenados = [...numeros]; 

numerosOrdenados.sort((a, b) => a - b); 

console.log("Números ordenados:", numerosOrdenados); 


// Descrição exercicio 06

// Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const pares = numeros.filter(numero => numero % 2 === 0);

console.log("Números pares:", pares);



// Descrição exercicio 07

// Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const quadrados = numeros.map(numero => numero ** 2);

console.log("Quadrados dos números:", quadrados);
