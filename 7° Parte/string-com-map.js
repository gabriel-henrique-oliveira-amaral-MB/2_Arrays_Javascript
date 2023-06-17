// Precisamos padronizar uma lista de alunos para que apareção com letra maiusculas

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

// Método toUpperCase deixa as strings com letras maiusculas
// Utilizando uma função de callback
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// Mas e se quisermos acessar somente uma letra? 

// const nome = "MB";
// let nomeMaiusculas = "";

// for (let i = 0; i < nome.length; i++) {
//  nomeMaiusculas += nome[i].toUpperCase()
// }
// console.log(nomeMaiusculas) //MB

// Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.

// Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos.