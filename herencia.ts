//HERENCIA SUPER 

class Televisor { 
    private volumen : number;
    private canal : number;
    private estaPrendido : boolean;

    public constructor() {
        this.volumen = 24;
        this.canal = 22;
        this.estaPrendido = true;
    }

    public subirVolumen() : void {
        this.volumen = this.volumen + 1 ;
    }

    public bajarVolumen () : void {
        this.volumen = this.volumen -1 ;
    }

    public prenderTele() : void {
        this.estaPrendido = true ;
    }

    public apagarTele() : void {
        this.estaPrendido = false;
    }

    public getCanal() {
        return "este es el canal" + this.canal;
    }

    public setCanal(canal:number) {
        this.canal = canal;
    }
} 

class smartTV extends Televisor {
    private estaConectado : boolean;
    public constructor(estaConectado : boolean) {
    super();
    this.estaConectado = estaConectado;
   }
}


let mitele : smartTV = new smartTV (true);
console.log(smartTV);
mitele.subirVolumen();
console.log(mitele);