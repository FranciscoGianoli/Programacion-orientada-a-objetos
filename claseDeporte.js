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
var Deportista = /** @class */ (function () {
    function Deportista() {
        this.posicion = "mediocampista";
        this.numero = 5;
    }
    Deportista.prototype.getposicion = function () {
        return "La posicion del deportista es" + this.posicion;
    };
    Deportista.prototype.setnumero = function (numero) {
        this.numero = numero;
    };
    return Deportista;
}());
var jugadorHockey = /** @class */ (function (_super) {
    __extends(jugadorHockey, _super);
    function jugadorHockey(utilizaPalo) {
        var _this = _super.call(this) || this;
        _this.utilizaPalo = utilizaPalo;
        return _this;
    }
    return jugadorHockey;
}(Deportista));
var lucasRossi = new jugadorHockey(true);
console.log(jugadorHockey);
lucasRossi.getposicion();
console.log(lucasRossi);
