// Fizemos uma função que recebeu um aluno por parâmetro e se ele estivesse presente 
//retornava a posição dele
// Mas podemos melhorar o código já que acaba não sendo muito légivel o que o código faz
const alunos = ['João','Juliana','Ana','Caio'];
const medias = [ 10, 8, 9, 7];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        // existe uma forma mais fácil de se obeter os arrays
        const [alunos, medias] = listaDeAlunosEMedias;
        
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        
        const mediaDoAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log('Média do aluno não encontada')
    }
}
console.log(listaDeAlunosEMedias[1][0]);
console.log(listaDeAlunosEMedias[0][0]);
exibeNomeENota('Ana');

// Nas linhas 6 e 7 estamos pegando as listas de alunos e médias pelas suas posições
// existe uma forma mais fácil de se obeter os arrays