interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}



class Animal implements IAnimal{
    readonly nome: string;
    idade: number;
    private _estaVivo: boolean;

    get estaVivo(): boolean{
        return this._estaVivo;
    }


    constructor(nome: string){
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }

     nascer(){
        this._estaVivo = true;
        return  console.log(`${this.nome} nasceu!`);
    };


    morrer(){
        this._estaVivo = false;
        return console.log(`${this.nome} morreu :(`);
    }
    crescer(){
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    };

}



namespace Terrestres{
    export class Cachorro extends Animal{
        correr(){
            console.log(`${this.nome} está correndo!`);
        }
}

    export let cachorro = new Cachorro("gorda");

}

namespace Aquaticos{
   export class Golfinho extends Animal{
        nadar(){
            console.log(`${this.nome} está nadando!`);
        }
    }

    export let golfinho = new Golfinho("Gozador");

}



Terrestres.cachorro.correr();
Aquaticos.golfinho.nadar();