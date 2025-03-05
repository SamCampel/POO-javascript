class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    /**
     * 
     */
    Reproduzir() {
        console.log("Reproduzir |>")
    }
    Pausar() {
        console.log("Pausar ||")
    }
    Avançar() {
        console.log("Avançar >>")
    }
    Fechar() {
        console.log("Fevhar X")
    }
    Ficha(){
        console.log("Titulo: " + this.titulo)
        console.log("Ano de lançamento: " + this.ano)
        console.log("Genero: " + this.genero)
        this.Reproduzir();
        this.Avançar();
    }
}

var vingadores = new Filme("vingadores 2", 2014, "ação", "alguem", "2h");

vingadores.Ficha();