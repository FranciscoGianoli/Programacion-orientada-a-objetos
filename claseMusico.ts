class Musica {
     protected genero : string;
     protected decada : number;
     protected usoInstrumento : boolean;

    public constructor(genero : string, decada : number, usoInstrumento:boolean){
        this. genero = genero;
        this.decada = decada;
        this.usoInstrumento = usoInstrumento;
    }

    getGenero(){
        return this.genero;
    }

    getDecada(){
        return this.decada;
    }

    instrumental(){
        this.usoInstrumento = true;
    }

}

class musicoRock extends Musica {
    public cantante : string;
    public constructor (cantante:string){
        super("rock", 1980, true);
        this.cantante = cantante ;
    }
}

let charlyGarcia : musicoRock = new musicoRock ("cantante de rockAndRoll");
console.log(musicoRock);
charlyGarcia .cantante;
console.log(charlyGarcia);
   
