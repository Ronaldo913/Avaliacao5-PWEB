const name = 'custo';

//closure: função que retorna uma função

function calcularCusto(ctx){
  let custoReimpressaoAtual = 100;
  let gastoPapel = (60/100) * custoReimpressaoAtual;
  let despesaGrafica = (40/100) * custoReimpressaoAtual;

  return draw(ctx, gastoPapel, despesaGrafica);
}

function draw(ctx, gastoPapel, despesaGrafica){
  let despesaGraficaReajuste = gastoPapel + ((25,9/100)*gastoPapel);
  let precoPapelReajuste = despesaGrafica + ((32,5/100)*despesaGrafica);

  let custoReimpressao = despesaGraficaReajuste + precoPapelReajuste;

  ctx.textContent = 'O custo de reimpressão para cada livro, considerando os reajustes, é de R$' + custoReimpressao;
}

export {name, draw, calcularCusto}