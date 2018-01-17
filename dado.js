let numero = Math.random() * 6;
let dado= Math.ceil(numero);
let chute = 2;

console.log(dado);

if (dado == chute) {
	console.log(`acerto mizeravi ${chute} dado: ${dado} `);
}else{
		console.log(`errou mizeravi ${chute} dado: ${dado} `);
}


