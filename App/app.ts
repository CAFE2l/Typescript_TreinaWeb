interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}



class Animal implements IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string){
        this.nome = nome;
        this.idade = 0;
        this.estaVivo = false;
    }

     nascer(){
        this.estaVivo = true;
        return  console.log(`${this.nome} nasceu!`);
    };
    crescer(){
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    };
    morrer(){
        this.estaVivo = false;
        console.log(`${this.nome} morreu :(`);
    };
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