// Procurando alunos como podemos proceder
const alunos = ['João','Juliana','Ana','Caio'];
const medias = [ 10, 8, 9, 7];

const listaDeAlunosEMedias = [alunos, medias];
// Caso não haja o aluno nessa posição do array o else será executado
function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadastrado`);
    } else {
        console.log('Aluno não encontado');
    }
}

exibeNomeENota("Sofia");



// O aluno joão foi encontrado

/*****************************************************Parte 2************************************************************************ */
// function exibeIndice(aluno) {
//     if(listaDeAlunosEMedias[0].includes(aluno)){
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);
//         console.log(`Indice do aluno ${indice}`);
//     } else {
//         console.log('Indice não encontado');
//     }
// }

// // Pra descobrir o indice de algum elemento do array. Passamos a lista que queremos e logo após o indexOf() que retorna a posição do index do nome do aluno,
// // caso o nome do aluno não exista nada será retornado

// /*****************************************************Parte 3************************************************************************ */
// // Nesse código pegamos o índice retornado da função indexOf() e colocamos para exibir a média do aluno 
// function exibeNota(aluno) {
//     if(listaDeAlunosEMedias[0].includes(aluno)){
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);
//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];
//         console.log(`Média do aluno ${mediaDoAluno}`);
//     } else {
//         console.log('Média do aluno não encontada');
//     }
// }
// exibeNomeENota("Caio");
// exibeIndice("Caio");
// exibeNota("Caio");