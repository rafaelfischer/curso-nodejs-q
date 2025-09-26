/*
	Objetivo do programa: Temperatura Ideal para Atividade: Para praticar um esporte ao ar livre, a temperatura deve estar entre 10°C E 30°C (inclusive). Peça a temperatura e informe se é "Ideal para o esporte" ou "Não ideal".
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Temperatura para Esporte');
console.log('--------------------------------------');

rl.question('Digite a temperatura em °C: ', (answer) => {
	const temperatura = parseFloat(answer);

	if (isNaN(temperatura)) {
		console.log('Entrada inválida. Por favor, digite um número para a temperatura.');
	}
	else {
		if (temperatura >= 10 && temperatura <= 30) {
			console.log('Ideal para o esporte');
		}
		else {
			console.log('Não ideal');
		}
	}

	rl.close();
});