"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Padlr = /** @class */ (function () {
    function Padlr() {
    }
    Padlr.left = function (str, n, padStr) {
        if (padStr === void 0) { padStr = " "; }
        var times = n - str.length;
        var newStr = "";
        while (times-- > 0) {
            newStr += padStr;
        }
        newStr += str;
        return newStr;
    };
    Padlr.right = function (str, n, padStr) {
        if (padStr === void 0) { padStr = " "; }
        var times = n - str.length;
        var newStr = str;
        while (times-- > 0) {
            newStr += padStr;
        }
        return newStr;
    };
    return Padlr;
}());
exports.Padlr = Padlr;
