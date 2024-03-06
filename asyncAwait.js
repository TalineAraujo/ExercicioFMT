// Descrição exercicio 02

// Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário. Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores). Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. Utilize async/await para realizar a chamada de forma assíncrona.

// Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações, exibe-as no console



    function getUserInfo (){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let usuario = {
                    nome: "Taline Araujo",
                    idade: 28 ,
                    email: "taline.araujo@hotmail.com"
                
                };
                resolve (usuario);
                
            }, 2000);

        });
       
    }


    async function exibirUserInfo (){
        try {
            let usuario = await getUserInfo();
            console.log("Informações do usuário:");
            console.log(usuario);
        } catch (erro){
            console.log("Sistema indisponivel", erro);
        }

    }

    exibirUserInfo();