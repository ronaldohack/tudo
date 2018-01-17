let emprestimo = 300;
let juros = 0.025;
let tempo = 6;


let valorTotal = emprestimo * (1 + juros) ** 6;
let valorJuros =  valorTotal - emprestimo;

console.log(`valor do juros é R$ ${valorJuros} e o valor final é R$ ${valorTotal}`)