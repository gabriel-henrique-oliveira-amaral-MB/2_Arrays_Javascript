// Calculando a media com outro método for chamado de forEach()
const notas = [10, 6.5, 8, 7.5];

// É um metodo em que passamos um função anônima
// forEach também é uma estrutura de repetição que funciona como método que aplica uma função de calback para cada um dos elementos do array

let somaDasNotas = 0;
// Para obter a soma das notas posso passar como um parâmetro dentro da função de callback, recebendo os valores do array a cada interação
notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
});

const media = somaDasNotas/ notas.length;

console.log(`A média das notas é ${media}.`);
// forEach tem uma vantagem em relação ao for of, nos parametros podemos passar mais um parâmetro que chamamos de indice

// OUTRAS FORMAS DE REMOVER DADOS REPETIDOS

// let city = [
//     "surat",
//     "ahmedabad",
//     "rajkot",
//     "mumbai",
//     "surat",
//     "delhi",
//     "ahmedabad",
//     "anand",
//   ];
  
//   // Defining the unique cities from the above
//   // array by using forEach loop
//   let unique_city = [];
//   city.forEach((c) => {
//     if (!unique_city.includes(c)) {
//       unique_city.push(c);
//     }
//   });

// var arr = ['foo', 'bar', 'foo'];
// var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
// console.log(novaArr); //dá ['foo', 'bar']