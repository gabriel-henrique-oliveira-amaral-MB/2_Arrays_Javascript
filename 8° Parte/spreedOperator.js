// Utilizando o spreed operator para copiar um array
// Vamos criar um novo array sem alterar o original

const notas = [ 7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são [${novasNotas}]`);
console.log(`As novas originais são [${notas}]`);
console.log('------------------------------------------------------------------------------------')
// Nesse caso como estamos passando a referência ambos arrays teram a mesma referência
// Para contornar esse comportamento e fazermos uma cópia do array sem estar interligado com spreed operator conhecido como operador de espalhamento
// Spreed operator são basicamente uma forma javascript de fazer cópias de um array
// Podemos usá-lo támbem em parametros de função
const notas1 = [ 7, 7, 8, 9];
// A sintaxe é muito flexivel
const novas1Notas = [ 5, ...notas1, 10];


console.log(`As novas notas são [${novas1Notas}]`);
console.log(`As novas originais são [${notas1}]`);


// Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. Para evitar esse comportamento, 
// devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).

// Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript. Acontece nos tipos primitivos da linguagem

// O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções

// const arrayOriginal = [7, 7, 8, 9];

// function alteraArray(array) {
//   array.push(10);

//   console.log(`array do parâmetro é ${array}`);
//   console.log(`arrayOriginal é ${arrayOriginal}`);
// }

// alteraArray(arrayOriginal);

// array do parâmetro é 7,7,8,9,10
// arrayOriginal é 7,7,8,9,10

// Solução trocamos o código alteraArray(arrayOriginal) por alteraArray([...arrayOriginal])

// array do parâmetro é 7,7,8,9,10
// arrayOriginal é 7,7,8,9