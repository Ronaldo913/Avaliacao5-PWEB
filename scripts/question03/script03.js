import {name1, draw, calcularCusto} from "./modules/custo.js";

let resp = document.getElementById('resultado');
document.getElementById('responder').onclick = function (){calcularCusto(resp)};