/*
	Objetivo do programa: Pergunte um número. Diga se esse número é positivo, negativo ou zero.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Número (Positivo, Negativo ou Zero)');
console.log('--------------------------------------------------');

rl.question('Digite um número: ', (answer) => {
	const numero = parseFloat(answer);

	if (isNaN(numero)) {
		console.log('Entrada inválida. Por favor, digite um número.');
	} else if (numero > 0) {
		console.log('O número é positivo');
	} else if (numero < 0) {
		console.log('O número é negativo');
	} else {
		console.log('O número é zero');
	}

	rl.close();
});