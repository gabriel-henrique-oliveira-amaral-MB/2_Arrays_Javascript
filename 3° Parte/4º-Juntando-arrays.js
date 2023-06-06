// Supondo que precisamos agora juntar duas salas, qual método do javascript precisariamos usar para fazer isso?
// Para isso o javascript nos disponibiliza o método concat que funciona como o + para concatenação
 const animaisMarinhos = ['🐋', '🐙', '🐬', '🦈'];
 const animaisTerrestre = ['🐞', '🦎', '🐧', '🐈'];
animaisTerrestre.push('🐮');
 const animais = animaisMarinhos.concat(animaisTerrestre);

 console.log(animais);

 
// O que acontece se passarmos para o concat um valor que não seja um array
// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayConcat)
// console.log(arrayOriginal)

// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. 
// Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.