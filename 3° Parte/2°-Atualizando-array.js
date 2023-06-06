// Em uma lista de alunos dois alunos saíram da escola e outro aluno entrou como podemos atualizar essa lista?
// O Javascript fornece para isso um método chamado splice()

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Ana e Caio sairam da escola e o Rodrigo entrou, aprendemos a remover um item do início da lista agora precisamos remover um item do meio da lista
// O primeiro parametro indicamos o indice do elemento que queremos remover o segundo a quantidade de itens que queremos remover
// O terceiro parametro(Opicional) colocar o Rodrigo após a remoção da Ana e Caio
nomes.splice(1, 2,'Rodrigo');

console.log(nomes);

// Esse método altera o array original assim como o push e o pop