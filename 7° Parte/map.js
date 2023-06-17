// Utilizando o método map
const notas = [10, 9.5, 8, 7, 6];

// O map nos possibilita retornar os valores do array que queremos sobrescrever
// map é uma metodo para os valores que queremos alterar em um array

// Console e return se comportam de forma diferente, geralmente o ideal é o return

const notasAtualizadas = notas.map((nota) => {
    return nota + 1; 
});

// const notasAtualizadas2 = notas.map((nota) => {
//     console.log(nota + 1); 
// });

// Map não sobrescreve os valores do array original precisamos usá-lo dentro de uma variável

console.log(notasAtualizadas);

// Não queremos que a nota passe de 10 ao invés de utilizar if e else nesse caso, vamos utilizar um ternário
/*
const notasAtualizadas3 = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas3);
*/
// Método é muito util caso queiramos alterar o valor de alguma forma