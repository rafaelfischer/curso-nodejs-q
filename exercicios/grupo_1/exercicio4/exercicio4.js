/*
	Objetivo do programa: Calcule o quadrado de um número
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

console.log('Programa para calcular o quadrado de um numero');
console.log('----------------------------------------------');

rl.question('Digite um numero: ', (numeroInput) => {
	const numero = parseFloat(numeroInput);
	const quadrado = numero * numero;
	console.log(`O quadrado de ${numero.toFixed(2)} e: ${quadrado.toFixed(2)}`);
	rl.close();
});