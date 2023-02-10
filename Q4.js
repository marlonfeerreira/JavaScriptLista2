function agrupamento(numeros) {
    var resultado = [0, 0, 0, 0];
    for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] >= 0 && numeros[i] <= 25) {
        resultado[0]++;
      } else if (numeros[i] > 25 && numeros[i] <= 50) {
        resultado[1]++;
      } else if (numeros[i] > 50 && numeros[i] <= 75) {
        resultado[2]++;
      } else if (numeros[i] > 75 && numeros[i] <= 100) {
        resultado[3]++;
      }
    }
    return resultado;
  }
console.log(agrupamento([10, 5, 80, 60, 25, 99, 81, 92]));