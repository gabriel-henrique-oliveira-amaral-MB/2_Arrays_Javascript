// Imagine que tivessemos que calcular a média de 100 notas? 
// Teriamos que criar uma variável para cada nota?
/*************************************************Parte 1***********************************************************/
//Descomente com control + ;

const nota1 = 10,
      nota2 = 20,
      nota3 = 8,
      nota4 = 4;
      
const media = (nota1 + nota2 + nota3 + nota4) / 4;
// console.log(media);

/*************************************************Parte 2***********************************************************/
// array(pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.) 
// guardam valores na memória do computador como se fosse uma caixinha
// Propriedade length nos retona a quantidade de dados presente em um array
// Descomente com control + ;
//              0   1   2   3
const notas = [10, 6.5, 8, 7.5];
const media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas[2]);

console.log(media2);


// Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento 
// ou item, e cada elemento se localiza numa posição na lista chamada de índice. 

// Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou
// outros dados reconhecidos pelo JavaScript.

// Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. 
// Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista
//  (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, 
// seus valores sempre aparecerão na mesma ordem: [50, 43, 12], por exemplo.

// Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a
//  contagem dos índices não começa no número 1, e sim no número 0. 