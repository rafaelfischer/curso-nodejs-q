/*
	Objetivo do programa: Solicita a temperatura e verifica se ela está entre 10°C e 30°C (inclusive) para determinar se é "Ideal para o esporte" ou "Não ideal".
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificação de Temperatura para Esporte');
console.log('---------------------------------------');

rl.question('Digite a temperatura (em °C): ', (temperaturaInput) => {
	const temperatura = parseFloat(temperaturaInput);

	if (isNaN(temperatura)) {
		console.log('Entrada inválida. Por favor, digite um número para a temperatura.');
		rl.close();
		return;
	}

	if (temperatura >= 10 && temperatura <= 30) {
		console.log('Ideal para o esporte');
	}
	else {
		console.log('Não ideal');
	}

	rl.close();
});