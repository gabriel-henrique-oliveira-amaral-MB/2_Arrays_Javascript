// Com média de 3 salas precisamos calcular a média geral de todas as salas
// Utilizaremos o método reduce

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

// O método reduce nos ajuda a somar vários números de uma lista
// Os parâmetros da função reduce são um pouco diferentes nesse caso passaremos 2 parâmetros sendo o primeiro chamado de acumulador e o segundo
// E número depois da chave é o valor inicial
// Reduce não altera array original

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;
    return media;
}
// Valor inicial do acumulador é o 0 
console.log(`A media da sala de Javascript é ${calculaMedia(salaJS)}`);
console.log(`A media da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A media da sala de Python é ${calculaMedia(salaPython)}`);


