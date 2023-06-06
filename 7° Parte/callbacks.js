// explorando funções de callback
const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
    console.log(nome)
});

// utilizando arrow functions

nomes.forEach((nome) => {
    console.log(nome)
});

// Existe uma terceira forma de usarmos as funções de callback
// Vamos criar uma função callback de forma externa
function imprimeNome(nome) {
    console.log(nome);
}

// Perceba que essa função será usada como função callback da mesma forma
// Temos que utilizar nesse caso sem os parêtenses, se utilizar com os parêntese ele vai entender que quero o retorno da função o que não está correto, não 
// estamos retornando nada
// Daremos preferência as arrow functions
nomes.forEach(imprimeNome);

//O que é um método? Em programação, chamamos de método uma função que é propriedade de um objeto.
// forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

// O forEach(), assim como alguns outros métodos de array do JavaScript que estamos vendo no curso, utiliza
//  a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) ;


// Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback,
//  assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita 
// (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, 
// como o break funcionaria para um for normal.

// O forEach() também não pode ser utilizado com qualquer iterável, 
// apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado

// Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso guia do AirBNB,
//  indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.

// forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada,
//  e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

// for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou
//  dar condições de saída do laço (por exemplo, com o uso de break);

// for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).