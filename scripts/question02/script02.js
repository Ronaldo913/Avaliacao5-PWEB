import {name, draw, mostrarTriangulo} from './modules/triangle.js';
import {nome, calcularDistancia, verificarTR, mostrarCalculo} from './modules/distance.js';
import {name1, calcularCustoReimpressao, calcularCusto} from "./modules/custo.js";

let exibirT = document.getElementById('t');
document.getElementById('exibir').onclick = function () {mostrarTriangulo(exibirT)};

let exibirD1 = document.getElementById('d1');
let exibirD2 = document.getElementById('d2');
let exibirD3 = document.getElementById('d3');
let exibirR = document.getElementById('r');
let exibirE = document.getElementById('explicacao');

document.getElementById('calcular').onclick = function () {calcularDistancia()};

document.getElementById('responder').onclick = function () { mostrarCalculo(exibirD1, exibirD2, exibirD3, exibirR, exibirE)};

/*function callback(e) {
    alert('Aconteceu um evento ' + e.type);
}
window.addEventListener('click', callback);
*/

//QUESTÃO 3:

let resp = document.getElementById('respostaq2');
document.getElementById('responderq2').onclick = function (){calcularCusto(resp)};