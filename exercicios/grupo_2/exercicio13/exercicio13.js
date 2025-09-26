/*
Objetivo do programa: Sinal do Número: Desenvolva um algoritmo que solicite um número e diga se ele é positivo, negativo ou zero.
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Sinal do Número');
console.log('------------------------------');

rl.question('Digite um número: ', (answer) => {
	const numero = parseFloat(answer);

	if (isNaN(numero)) {
		console.log('Entrada inválida. Por favor, digite um número válido.');
	} 
	else if (numero > 0) {
		console.log('O número é positivo');
	} 
	else if (numero < 0) {
		console.log('O número é negativo');
	} 
	else {
		console.log('O número é zero');
	}

	rl.close();
});