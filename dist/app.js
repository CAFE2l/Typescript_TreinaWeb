"use strict";
class Animal {
    get estaVivo() {
        return this._estaVivo;
    }
    constructor(nome) {
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }
    nascer() {
        this._estaVivo = true;
        return console.log(`${this.nome} nasceu!`);
    }
    ;
    morrer() {
        this._estaVivo = false;
        return console.log(`${this.nome} morreu :(`);
    }
    crescer() {
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    }
    ;
}
let cachorro = new Animal('Totó');
cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.morrer();
