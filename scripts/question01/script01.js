import {calcular} from './modules/distance';
import {nome, inserirValor} from './modules/valor';

let resultado = document.getElementById('result');
document.getElementById('enviar').onclick = function () {calcular(resultado)};

let v1 = document.getElementById('valor-A');
//let v2 = document.getElementById('valor-B');

document.getElementById('b0').onclick = function () {inserirValor(v1, 0)};

document.getElementById('b1').onclick = function () {inserirValor(v1, 1)};

document.getElementById('b2').onclick = function () {inserirValor(v1, 2)};

document.getElementById('b3').onclick = function () {inserirValor(v1, 3)};

document.getElementById('b4').onclick = function () {inserirValor(v1, 4)};

document.getElementById('b5').onclick = function () {inserirValor(v1, 5)};

document.getElementById('b6').onclick = function () {inserirValor(v1, 6)};

document.getElementById('b7').onclick = function () {inserirValor(v1, 7)};

document.getElementById('b8').onclick = function () {inserirValor(v1, 8)};

document.getElementById('b9').onclick = function () {inserirValor(v1, 9)};
//document.getElementById('b9').onclick = function () {inserirValor(v2, 9)};

document.getElementById('c4').appendChild(document.createElement('p'))