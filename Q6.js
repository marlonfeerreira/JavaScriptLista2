function pa(inicio, razao, elementos) {
  let result = '';
  let num = inicio;
  for (let i = 0; i < elementos; i++) {
    result += num + ', ';
    num += razao;
  }
  return '' + result.slice(0, -2) + '...';
}

console.log(pa(4, 3, 5))
console.log(pa(100, -2, 4))
console.log(pa(3, 3, 3))

