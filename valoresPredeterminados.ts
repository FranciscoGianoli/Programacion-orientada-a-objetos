//VALORES PRE-DETERMINADOS

class Calistenia { 
    private anillas: string;
    private repsBarras : number;
    private estaHabilitado : boolean;

    public constructor() {
        this.anillas = "Front Lever" ;
        this.repsBarras = 50;
        this.estaHabilitado = true;
    }

public getPosturaAnillas() {
    return this.anillas;
}

public setResistencia(repsBarras: number){
    this.repsBarras = repsBarras;
}

public sinLesion() : void {
    this.estaHabilitado = true;
}
}
let atletaCalistenico = new Calistenia;
console.log(atletaCalistenico);

