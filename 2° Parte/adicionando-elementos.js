// Supondo que faltou uma nota para ser inserida
// Para fazer isso o javascript nos proporciona um método de inserção no final do array chamado de push(n)
// Por mais que o tipo const não nos propicie a reatribução de valor podemos usar métodos do array para inserir dados
// Cada elemento de um array possui um valor único e numérico chamado de índice.
const notas = [ 10, 6, 8];
notas.push(7);
console.log(notas);
// notas = [10, 6, 8] Erro pois const(s) não podem ser reatribuidas;
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);