let arr = [1,3,5,7,9];
//O método "push" em JavaScript adiciona um ou mais elementos ao final de um array 
let teste = arr.push(11,13,true,'ola mundo');
console.log(teste);
console.log(arr);

//O método "pop" em JavaScript remove o último elemento de um array
let ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

//O método shift() em JavaScript remove o primeiro elemento de um array 
let primeiroItem = arr.shift();
console.log(primeiroItem);
console.log(arr);

//O método unshift() em JavaScript adiciona um ou mais elementos ao início de um array
teste = arr.unshift(4,5,6);
console.log(teste);
console.log(arr);

//O método slice em JavaScript é usado para criar uma cópia rasa de uma parte de um array. Ele retorna um novo array contendo os elementos a partir do índice inicial (start) até o índice final (end, não incluído).
// let arr2 = arr.slice(2);
let arr2 = arr.slice(2,4);
console.log(arr2);
console.log(arr);

//O método splice() em JavaScript é usado para alterar o conteúdo de um array, removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar deles.
let arr3 = arr.splice(2,4,"ola mundo");
console.log(arr);
console.log(arr3);//array com os elementos removidos