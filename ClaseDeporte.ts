class Deportista {
    protected posicion : string;
    protected numero : number;

public constructor(){
    this.posicion = "mediocampista";
    this.numero = 5;
}

public getposicion() {
    return "La posicion del deportista es" + this.posicion;
}

public setnumero(numero:number) {
    this.numero= numero;
}
}

class jugadorHockey extends Deportista {
    private utilizaPalo : boolean;
    public constructor (utilizaPalo : boolean) {
        super();
        this.utilizaPalo = utilizaPalo;
    }
}

let lucasRossi : jugadorHockey = new jugadorHockey(true);
console.log(jugadorHockey);
lucasRossi.getposicion();
console.log(lucasRossi);