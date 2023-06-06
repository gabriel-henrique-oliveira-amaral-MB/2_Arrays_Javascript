// Depois de calcular a média dos alunos precisamos mostrar quem está reprovado entre eles
// Para isso utilizaremos o método filter

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const medias = [7, 4.5, 8, 7.5];
// O método filter é um método novo do javascript onde podemos passar um parâmetro uma função de callback
// Passamos para isso dois argumentos uma condição que só será retornado caso a condição seja true para o elemento do array
// (sempre precisamos retornar verdadeiro ou falso para pegarmos os valores)
const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados)
// É obrigatório nomear no mínimo o primeiro parâmetro 