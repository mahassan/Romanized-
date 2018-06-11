"use strict";
var conversion = /** @class */ (function () {
    function conversion() {
    }
    //method implemention
    conversion.prototype.convertToRomans = function (number) {
        if (number === void 0) { number = ""; }
        var result;
        var Romans = ["I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "VIIII", "X"];
        for (var i = 0; i < Romans.length; i += 1) {
            console.log(i + 1 + " is " + Romans[i] + " in roman");
        }
        result = number;
        return result;
    };
    return conversion;
}());
var romans = new conversion();
console.log(romans.convertToRomans());
//     For example, see the following sample inputs and outputs: 
// 1 = “I” 
// 5 = “V” 
// 10 = “X” 
// 20 = “XX” 
// 3999 = “MMMCMXCIX”
// Caveat: Only support numbers between 1 and 3999 
