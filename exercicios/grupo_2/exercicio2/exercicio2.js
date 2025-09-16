/*
	Objetivo do programa: Pergunte um número. Diga se este numero é primo ou não, escrevendo na tela.
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

let primo = true; // Corresponds to 'primo: boolean = true;'

console.log('Eh um numero primo?');
console.log('-----------------------');

rl.question('Digite um numero: ', (infoUser) => {
	const numero = parseInt(infoUser);

	// Por 2: Se o número for par (termina em 0, 2, 4, 6 ou 8), ele não é primo.
	// Por 3: Se a soma dos algarismos do número for divisível por 3, o número também é divisível por 3 e não é primo.
	// Por 5: Se o número terminar em 0 ou 5, ele não é primo.
	if (numero === 0) {
		primo = false;
	} else if (numero === 2) {
		primo = false;
	} else if ((numero % 2 === 0) && (numero !== 2)) {
		primo = false;
	} else if ((numero % 3 === 0) && (numero !== 3)) {
		primo = false;
	} else if ((numero % 5 === 0) && (numero !== 5)) {
		primo = false;
	}

	console.log(`O numero ${numero} eh primo?: ${primo ? 'Sim' : 'Nao'}`);
	rl.close();
});