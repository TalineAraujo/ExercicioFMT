// Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.

function dados (){

let nome = prompt("Digite seu nome: ");
let email = prompt("Digite seu email: ");
let idade = prompt("Digite sua idade: ");



let usuario = {
    nome: nome,
    email: email,
    idade: idade  
};

localStorage.setItem("user", JSON.stringify(usuario));

}

dados();