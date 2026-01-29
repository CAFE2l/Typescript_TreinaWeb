"use strict";
class Animal {
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this.estaVivo = false;
    }
    nascer() {
        this.estaVivo = true;
        return console.log(`${this.nome} nasceu!`);
    }
    ;
    crescer() {
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }
    ;
    morrer() {
        this.estaVivo = false;
        console.log(`${this.nome} morreu :(`);
    }
    ;
}
let cachorro = new Animal('Totó');
cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.morrer();
let gato = new Animal("Simba");
gato.nascer();
gato.crescer();
gato.crescer();
gato.morrer();
