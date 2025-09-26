/*
Objetivo do programa: Pergunte uma letra (V, A, B). Diga a cor correspondente (Vermelho, Azul, Branco). Atenção, utilize a estrutura CASE.
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Identificador de Cores');
console.log('----------------------');

rl.question('Digite uma letra (V, A ou B): ', (answer) => {
	const letra = answer.toUpperCase();

	switch (letra) {
		case 'V':
			console.log('Vermelho');
			break;
		case 'A':
			console.log('Azul');
			break;
		case 'B':
			console.log('Branco');
			break;
		default:
			console.log('Letra inválida. Por favor, digite V, A ou B.');
	}

	rl.close();
});