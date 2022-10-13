var Calistenia = /** @class */ (function () {
    function Calistenia() {
        this.anillas = "Front Lever";
        this.repsBarras = 50;
        this.estaHabilitado = true;
    }
    Calistenia.prototype.getPosturaAnillas = function () {
        return "Back lever and " + this.anillas;
    };
    Calistenia.prototype.setResistencia = function (repsBarras) {
        this.repsBarras = repsBarras;
    };
    Calistenia.prototype.sinLesion = function () {
        this.estaHabilitado = true;
    };
    return Calistenia;
}());
var atletaCalistenico = new Calistenia;
console.log(atletaCalistenico);
