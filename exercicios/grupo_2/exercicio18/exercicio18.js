/*
	Objetivo do programa: Dia da Semana: Peça um número de 1 a 7 e imprima o nome do dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Se o número for inválido, informe.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Identificador de Dia da Semana');
console.log('------------------------------');

rl.question('Digite um número entre 1 e 7: ', (answer) => {
	const numero = parseInt(answer);

	if (isNaN(numero) || numero < 1 || numero > 7) {
		console.log('Número inválido! Digite um número entre 1 e 7.');
	} else {
		switch (numero) {
			case 1:
				console.log('Domingo');
				break;
			case 2:
				console.log('Segunda-feira');
				break;
			case 3:
				console.log('Terça-feira');
				break;
			case 4:
				console.log('Quarta-feira');
				break;
			case 5:
				console.log('Quinta-feira');
				break;
			case 6:
				console.log('Sexta-feira');
				break;
			case 7:
				console.log('Sábado');
				break;
		}
	}

	rl.close();
});