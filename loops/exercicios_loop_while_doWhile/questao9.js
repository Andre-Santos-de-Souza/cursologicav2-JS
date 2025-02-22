//Use um while para imprimir a sequência de Fibonacci até o número 100.
let a = 0, b = 1;
while (a <= 100) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}