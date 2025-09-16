/*
	Objetivo do programa: Pergunte um número. Diga se este numero é par ou ímpar, escrevendo na tela.
	Data da criacao: 2025-08-28
	Criado por: @programacaomentoria
	Ultima atualizacao: 2025-09-16
	Alterado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Par ou Impar');
console.log('-----------------------');

rl.question('Digite um numero: ', (answer) => {
	const numero = parseInt(answer);

	if (numero % 2 === 0) {
		console.log(`O numero ${numero} eh par.`);
	} else {
		console.log(`O numero ${numero} eh impar.`);
	}

	rl.close();
});
