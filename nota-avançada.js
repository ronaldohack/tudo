let aluno = {
	nome: 'Enzo',
	sobrenome: 'Gabriel',
	nota1: 6,
	nota2: 7,
	trabalho: 8
};

let media = (aluno.nota1 + aluno.trabalho + aluno.nota2 * 2) / 4;

// console.log(media);

if (media>= 7) {
	console.log(` O aluno ${aluno.nome} ${aluno.sobrenome} foi aprovado com a media ${media}`);
} else{
	console.log(` O aluno $aluno.nome} ${aluno.sobrenome} foi  reprovado com a media ${media}`)
}