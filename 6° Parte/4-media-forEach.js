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

// console.log(`A média das notas é ${media}.`);











// forEach tem uma vantagem em relação ao for of, nos parametros podemos passar mais um parâmetro que chamamos de indice

// OUTRAS FORMAS DE REMOVER DADOS REPETIDOS

let cidades = [
    "Extrema",
    "Mateus Leme",
    "Rio de Janeiro",
    "São Paulo",
    "Extrema",
    "Itaúna",
    "Mateus Leme",
    "São Paulo",
  ];
  
  // Defining the unique cities from the above
  // array by using forEach loop
//   let cidade_unica = [];
//   cidades.forEach((c) => {
//     if (!cidade_unica.includes(c)) {
//       cidade_unica.push(c);
//     }
//   });
//   console.log(cidade_unica)

var arr = ['foo', 'bar', 'foo'];
var novaArr = cidades.filter((este, i) => cidades.indexOf(este) === i);
console.log(novaArr); //dá ['foo', 'bar']