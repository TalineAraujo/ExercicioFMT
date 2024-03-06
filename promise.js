// Descrição exercicio 01

// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

// ‌

// OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro
let numero = 10;

function parImpar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(`O número ${numero} é par!`);
        } else {
            reject(`Error: O número ${numero} é ímpar!`);
        }
    });
}

parImpar(numero)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });