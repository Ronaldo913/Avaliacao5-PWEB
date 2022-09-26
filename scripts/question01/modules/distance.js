const name = 'distance';

function calcular(ctx) {

  let x = document.getElementById('valor-A').value;
  let y = document.getElementById('valor-B').value;

  draw(ctx, x, y);

  return {
    x: x,
    y: y,
  };
}

function draw(ctx, x, y) {
  let a = Math.pow(x - y, 2);
  let b = Math.pow(x - y, 2);
  let d = Math.sqrt(a + b);
  ctx.textContent = d;
}

export {name, draw, calcular};