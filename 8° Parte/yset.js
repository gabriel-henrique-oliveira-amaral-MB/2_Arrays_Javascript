// Removendo elemento duplicados de uma lista
// Ao invez de utilizar o forEach o javascript nos oferece outra forma
const nomes = ["Ana", "Clara", "Maria","Maria", "João", "João", "João"];

// Set é uma classe do javascript
// Posso passar uma lista dentro do set
const meuSet = new Set(nomes);

// Transformando set em uma lista
const nomesAtualizados = [...meuSet];
// const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

// Elementos não estão mais duplicados no momento que passamos dados repetidos
// Set possui alguns métodos que não são iguais aos arrays

// Você viu que a estrutura Set é muito semelhante aos arrays, mas possui diferentes métodos e a interessante regra de que seus elementos 
// não podem se repetir. Utilizamos essa regra ao nosso favor para eliminar as duplicatas de um array, convertendo-o para um Set e de volta para um array.