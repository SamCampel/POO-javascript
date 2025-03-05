class Leitor{
    Ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteudo escrito")
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado")
    }
}

class CriadorDePDF{
    Criar(nome){
        console.log("PDF criado")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo")
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador;
        this.destuidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new CriadorDePDF();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(Lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destuidor.Deletar();