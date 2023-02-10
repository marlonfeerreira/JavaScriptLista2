function intervalo(inicio, fim){
  var resultado = [];
  if (inicio <= fim) {
    for (var i = inicio; i <= fim; i++) {
      resultado.push(i);
    }
  } else {
    for (var i = inicio; i >= fim; i--) {
      resultado.push(i);
    }
  }
  return resultado;
}
console.log(intervalo(1, 5))
console.log(intervalo(0, -5))