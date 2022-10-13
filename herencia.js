//HERENCIA SUPER 
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
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.volumen = 24;
        this.canal = 22;
        this.estaPrendido = true;
    }
    Televisor.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Televisor.prototype.prenderTele = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.apagarTele = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.getCanal = function () {
        return "este es el canal" + this.canal;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    return Televisor;
}());
var smartTV = /** @class */ (function (_super) {
    __extends(smartTV, _super);
    function smartTV(estaConectado) {
        var _this = _super.call(this) || this;
        _this.estaConectado = estaConectado;
        return _this;
    }
    return smartTV;
}(Televisor));
var mitele = new smartTV(true);
console.log(smartTV);
mitele.subirVolumen();
console.log(mitele);
