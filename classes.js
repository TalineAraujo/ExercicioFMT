// class Carro {
//     // atributos ou propriedades
//     modelo;
//     marca;
//     cor;
  
//     constructor(modelo, marca, cor = "Branca"){
//       this.modelo = modelo
//       this.marca = marca
//       this.cor = cor
//     }
  
//     // métodos / ações
//     acelerar(){
//       console.log("O carro está acelerando!")
//     }
  
//     alterarCor(novaCor){
//       this.cor = novaCor
//     }
  
//     descreverCarro(){
//       console.log(this)
//     }
//   }
//   // instância
//   let carro = new Carro("Fiat", "Uno", "Prata");
//   // carro.acelerar()
//   // carro.alterarCor("Amarelo")
//   carro.descreverCarro()



class ContaBancaria{
  _saldo;
  nomeTitular;
  agencia;
  conta;
  banco;


  constructor(nomeTitular, agencia, conta, banco ="Bradesco"){

    this.nomeTitular = nomeTitular
    this.agencia = agencia
    this.conta = conta
    this.banco = banco 
    this._saldo = 0;

  }

  depositar(valor){
    this._saldo += _saldo //valor que já tinha mais o que foi depositado
  }

  transferir(){

  }

  sacar(valor){
    if(valor > this._saldo){
        console.log("Saldo insuficiente!")
        return
    }
    this._saldo -= valor
  }

  exibirSaldo(){
    console.log(`A conta do(a) titular ${this.nomeTitular} possui R$ ${this._saldo}`)

  }

}

let conta1 = new ContaBancaria ("Taline", 1245, 12456, "Santander")



