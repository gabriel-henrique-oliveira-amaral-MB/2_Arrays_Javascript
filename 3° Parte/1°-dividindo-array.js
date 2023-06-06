// Supondo que precisamos dividir um array, para separar os alunos por sala

const alunos = ['Joao', 'Maria', 'José', 'Antonio', 'Carlos', 'Mariana', 'Felipe', 'Gustavo', 'Marcos', 'Ana'];

// Pegaremos os 5 primeiros alunos para colocar em uma sala 


// O Método slice é um método do javascript onde passamos a INDICE INICIAL do array que queremos pegar valores e posição que queremos que TERMINE 

// alunos.slice(0, 5);

// console.log(alunos);

// Metódo não altera o array original como o push e o pop 

const sala1 = alunos.slice(0, 5);

console.log(sala1);

const sala2 = alunos.slice(5, 10);
// ou sala2 = alunos.slice(5);

console.log(sala2);

// Para sabermos quais métodos alteram o array original temos que consultar o documentação oficial do javascript
// https://developer.mozilla.org/pt-BR/
// Você não precisa entender tudo que é mencionado em cada página (e no início de desenvolvimento, você provavelmente irá 
// se deparar com muitos termos novos), mas ela é uma excelente fonte de consultas.