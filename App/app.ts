interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

let cachorro: IAnimal = {
    nome: "Rex",
    idade: 0,
    estaVivo: false,
    especie: "Canis Lupus Familiaris",
    nascer(){
        this.estaVivo = true;
        return  console.log(`${this.nome} nasceu!`);
    },
    crescer(){
        this.idade++;
        console.log(`${this.nome} agora tem ${this.idade} anos.`);
    },
    morrer(){
        this.estaVivo = false;
        console.log(`${this.nome} morreu :(`);
    }
}

cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.morrer();

interface IAnimal{
    especie: string;

}
