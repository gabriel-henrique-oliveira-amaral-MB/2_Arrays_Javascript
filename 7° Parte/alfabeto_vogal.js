let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let vogais = 'AEIOU';

let arrayLetras = letras.split('');
let arrayVogais= vogais.split('');

let frase = 'Tatyelle';
let fraseMinuscula = frase.toUpperCase();

let arrayFrase = fraseMinuscula.split('');

arrayFrase.map((letra) =>
{
    if(arrayLetras.includes(letra)){
        console.log(arrayVogais.includes(letra)  ? `${letra} é vogal` : `${letra} é consoante`);
    } else {
        console.log(`${letra} não é letra`)
    }
}
)

// for (let i = 0; i < arrayFrase.length; i++) {
//  if(arrayLetras.includes(arrayFrase[i])){
//         console.log(arrayVogais.includes(arrayFrase[i])  ? `${arrayFrase[i]} é vogal` : `${arrayFrase[i]} é consoante`);
//     } else {
//         console.log(`${arrayFrase[i]} não é letra`)
//     }
// }


// let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let vogais = 'AEIOU';
// let frase = 'Gabriel';
// let fraseMaiuscula = frase.toUpperCase()

// for(let i of fraseMaiuscula){
//     if((letras.split('')).includes(i)){
//     console.log((vogais.split('')).includes(i)  ? `${i} é vogal` : `${i} é consoante`);
//     } else {                
//     console.log(`${i} não é letra`) 
//     }
// }


