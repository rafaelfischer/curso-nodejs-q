/*
	Objetivo do programa: Número no Intervalo: Verifique se um número inteiro fornecido pelo usuário está entre 1 e 10 (1 e 10 não são contados).
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Número no Intervalo (1 a 10, exclusivo)');
console.log('--------------------------------------------------');

rl.question('Digite um número inteiro: ', (answer) => {
	const numero = parseInt(answer);

	if (isNaN(numero)) {
		console.log('Entrada inválida. Por favor, digite um número inteiro válido.');
	}
	else {
		if (numero > 1 && numero < 10) {
			console.log('O número está entre 1 e 10.');
		}
		else {
			console.log('O número não está entre 1 e 10.');
		}
	}

	rl.close();
});