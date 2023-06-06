// let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let vogais = 'AEIOU';

// let arrayLetras = letras.split('');
// let arrayVogais= vogais.split('');

// let frase = 'Gabriel';
// let fraseMinuscula = frase.toUpperCase();

// let arrayFrase = fraseMinuscula.split('');

// arrayFrase.map((letra) =>
// {
//     if(arrayLetras.includes(letra)){
//         console.log(arrayVogais.includes(letra)  ? `${letra} é vogal` : `${letra} é consoante`);
//     } else {
//         console.log(`${letra} não é letra`)
//     }
// }
// )


let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let vogais = 'AEIOU';
// let frase = 'Gabriel';
// let fraseMaiuscula = frase.toUpperCase()

// for(let i of fraseMaiuscula){
//     if((letras.split('')).includes(i)){
//     console.log((vogais.split('')).includes(i)  ? `${i} é vogal` : `${i} é consoante`);
//     } else {                
//     console.log(`${i} não é letra`) 
//     }
// }

console.log((letras.split('')).includes((vogais.split(''))));
