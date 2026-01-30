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
var Terrestres;
(function (Terrestres) {
    class Cachorro extends Animal {
        correr() {
            console.log(`${this.nome} está correndo!`);
        }
    }
    Terrestres.Cachorro = Cachorro;
    Terrestres.cachorro = new Cachorro("gorda");
})(Terrestres || (Terrestres = {}));
var Aquaticos;
(function (Aquaticos) {
    class Golfinho extends Animal {
        nadar() {
            console.log(`${this.nome} está nadando!`);
        }
    }
    Aquaticos.Golfinho = Golfinho;
    Aquaticos.golfinho = new Golfinho("Gozador");
})(Aquaticos || (Aquaticos = {}));
Terrestres.cachorro.correr();
Aquaticos.golfinho.nadar();
