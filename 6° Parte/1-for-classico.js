// Precisamos imprimir todos os valores desse array, mas ao invés de imprimir número por número podemos usar um laço de repetição para que isso seja possivel
// const numeros = [100,200,300,400,500,600];
// Para usar o for precisamos de números e chaves

// O for é constituido de 3 expressões dentro dos parenteses
 
// for(let indice = 0;indice < 6 ; indice++){
// //  console.log('oi')    
//     console.log(numeros[indice]);
// }
let soma = 0;
for(let i = 0; i <= 1000000; i++){
    soma = soma + i;
}

console.log(soma);









// Primeira expressão é executada apenas uma vez, ele já inicia o valor 
// Logo após o programa ler a primeira expressão, irá adentrar dentro do bloco de chaves e executar o que está em seu interior
// segunda expressão: condição de execução
// Condicional que deve ser satisfeita para que o laço continue executado se o valor for false a execução para
// terceira expressão: é executada sempre ao final do bloco
// Essa expressão é executada após a primeira epressão enquanto a condição da segunda expressão for falsa

// Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para
// , entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

// Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o 
// programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

// O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, 
// ou até mesmo o computador, então é importante saber como evitá-lo.

// O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, 
// a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). 
// Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna
//  false e isso encerra o loop.

// O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. 
// Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:

// for (let indice = 0; indice <= 10; ) {
//     console.log(indice);
//   }

// for (let indice = 0; indice < 10; indice++) {
//     indice--;
//     console.log(indice);
//   }

// o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, 
// finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.