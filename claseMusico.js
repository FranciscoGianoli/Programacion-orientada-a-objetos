var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Musica = /** @class */ (function () {
    function Musica(genero, decada, usoInstrumento) {
        this.genero = genero;
        this.decada = decada;
        this.usoInstrumento = usoInstrumento;
    }
    Musica.prototype.getGenero = function () {
        return this.genero;
    };
    Musica.prototype.getDecada = function () {
        return this.decada;
    };
    Musica.prototype.instrumental = function () {
        this.usoInstrumento = true;
    };
    return Musica;
}());
var musicoRock = /** @class */ (function (_super) {
    __extends(musicoRock, _super);
    function musicoRock(cantante) {
        var _this = _super.call(this, "rock", 1980, true) || this;
        _this.cantante = cantante;
        return _this;
    }
    return musicoRock;
}(Musica));
var charlyGarcia = new musicoRock("cantante de rockAndRoll");
console.log(musicoRock);
charlyGarcia.cantante;
console.log(charlyGarcia);
