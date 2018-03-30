'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(palabra) {
    var translation = palabra;
    if (palabra.toLowerCase().endsWith('ar')) {
        translation = palabra.slice(0, -2);
    }
    if (palabra.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }
    var tamaño = translation.length;
    if (tamaño >= 10) {
        var primera = translation.slice(0, Math.round(tamaño / 2));
        var segunda = translation.slice(Math.round(tamaño / 2));
        translation = primera + '-' + segunda;
    }
    var reverse = function reverse(palabra) {
        return palabra.split('').reverse().join('');
    };

    function minMay(palabra) {
        var length = palabra.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var element = palabra.charAt(i);
            translation += capitalize ? element.toUpperCase() : element.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (palabra == reverse(palabra)) {
        return minMay(palabra);
    }
    return translation;
}