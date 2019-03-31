"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./src/index");
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());
var Ironman = /** @class */ (function (_super) {
    __extends(Ironman, _super);
    function Ironman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ironman.prototype.getCharactor = function () {
        return 'Robert Donnie Jr';
    };
    Ironman.prototype.getAbility = function () {
        return ['electromagnetic pulse', 'magnetic fields', 'missles', 'pulse bolts'];
    };
    Ironman = __decorate([
        index_1.Injectable()
    ], Ironman);
    return Ironman;
}(Hero));
var Thor = /** @class */ (function (_super) {
    __extends(Thor, _super);
    function Thor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thor.prototype.getCharactor = function () {
        return 'Chris Hemsworth';
    };
    Thor.prototype.getAbility = function () {
        return ['Thunder attack', 'Thunder hammer'];
    };
    Thor = __decorate([
        index_1.Injectable()
    ], Thor);
    return Thor;
}(Hero));
var CaptianAmerica = /** @class */ (function (_super) {
    __extends(CaptianAmerica, _super);
    function CaptianAmerica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptianAmerica.prototype.getCharactor = function () {
        return 'Chris Evans';
    };
    CaptianAmerica.prototype.getAbility = function () {
        return ['field', 'super power'];
    };
    CaptianAmerica = __decorate([
        index_1.Injectable()
    ], CaptianAmerica);
    return CaptianAmerica;
}(Hero));
index_1.bootstrap({
    provider: [
        Ironman,
        Thor,
        CaptianAmerica
    ]
});
var Avenager = /** @class */ (function () {
    function Avenager(ironman, thor, captain) {
        this.ironman = ironman;
        this.thor = thor;
        this.captain = captain;
        console.log("The Ironman was play by " + this.ironman.getCharactor() + ", and its abilities are " + this.ironman.getAbility().join(', '));
        console.log("The Thor was play by " + this.thor.getCharactor() + ", and its abilities are " + this.thor.getAbility().join(', '));
        console.log("The Captain America was play by " + this.captain.getCharactor() + ", and its abilities are " + this.captain.getAbility().join(', '));
    }
    Avenager = __decorate([
        index_1.Component(),
        __metadata("design:paramtypes", [Ironman,
            Thor,
            CaptianAmerica])
    ], Avenager);
    return Avenager;
}());
var avenagers = index_1.construct(Avenager);
console.log(avenagers);
//# sourceMappingURL=demo.js.map