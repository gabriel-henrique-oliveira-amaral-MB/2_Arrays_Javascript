// lembrando que o .lenght retorna o tamanho do array
// Praticando calculo de médias com for
//              0    1  2    3
const notas = [10, 6.5, 8, 7.5];

//Sem o for 
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);

//Com o for
let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
     somaDasNotas += notas[i];
}
const mediaFor = somaDasNotas / notas.length;

console.log(`A média das notas é ${mediaFor}.`)