const promise = new Promise((resolve, reject)=>{
    let condicao = false;
    if(condicao){
        resolve(`Estou pronto`);
    }else{
        reject(`Deu erro`)
    }


});

promise
.then((mensagem)=>{console.log("mensagem")
})
.catch((erro)=>{
    console.log(erro)
})

