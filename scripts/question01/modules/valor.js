const nome = 'valor';

function inserirValor(ctx, valor) {

  let b = valor;

  inserir(ctx, b);

  return {
    b: b,
  };
}

function inserir(ctx, valorBotao) {
  ctx.value = valorBotao;
}



export {nome, inserirValor};