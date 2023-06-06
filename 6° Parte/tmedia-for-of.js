// Veremos uma outra forma, recente de se usar estruturas de repetição

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Busca todos os elementos do array
// Esse for of não tem flexibilidade como o for classico como incremento e decremento
for (let nota of notas) {
    somaDasNotas += nota;
}
const media = somaDasNotas/ notas.length;

console.log(`A média das notas é ${media}.`);

// Atalho se selecionarmos uma variavel e teclar F2 podemos renomear o nome da variável
