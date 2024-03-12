class Produto {
    nome; 
    preco;
    quantidade;

    constructor (nome, preco, quantidade){
        this.nome = nome 
        this.preco = 0;
        this.quantidade = quantidade
    }

  Vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade){
      console.log("Estoque insuficiente!")
      console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
      return
    }
      
  
    this.quantidade -= quantidadeVendida
  }

  Repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
  }

  MostrarEstoque(){
    console.log(`O produto ${this.nome} custa R$ ${this.preco}\n e possui ${this.quantidade} unidades em estoque!`)
  }

  AtualizarPreco(novoValor){
    this.preco = novoValor
  }
}

class Pessoa {
  nome;
  idade;
  profissao;
  
  constructor(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
  }
}


class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde){
    super(nome, idade, profissao)
    this.telefone = telefone
    this.email = email
    this.clienteDesde = clienteDesde
  }
}


const clienteTaline = new Cliente("Taline Araujo", 28, "Analista", "48991133333", "taline.araujo@hotmail.com", "2021-01-10")
console.log(clienteTaline)






const caneta = new Produto("Caneta", 2, 5)
caneta.Vender(10)
caneta.Repor(10)
caneta.Vender(12)
caneta.AtualizarPreco(2.5)
caneta.MostrarEstoque()