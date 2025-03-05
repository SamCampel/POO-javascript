class Animal{
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preço = preco;
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Metodo qualquer")
    }

}

class Cachorro extends Animal{

    constructor(nome, idade, preco, raca, peso){
        super(nome,idade,preco)
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log("ROLF")
    }

    ChecarEstoque(){
        console.log("Temos 2 cachorros")
    }

    MetodoQualquer(){
        super.MetodoQualquer();
    }
}

var dog = new Cachorro("Dogão", 5, 250,"fila", 50)

dog.ChecarEstoque();
dog.Latir();
dog.MetodoQualquer();
console.log(dog.idade);