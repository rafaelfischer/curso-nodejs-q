/*
	Objetivo do programa: Pergunte um número de 1 a 7. Diga a qual dia da semana esse número é correspondente (1 = Domingo, 2 = Segunda, ..., 7 = Sábado). Atenção, utilize a estrutura CASE.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Dia da Semana');
console.log('-------------');

rl.question('Digite um número (1-7): ', (answer) => {
	const numero = parseInt(answer);

	if (isNaN(numero) || numero < 1 || numero > 7) {
		console.log('Número inválido. Por favor, digite um número entre 1 e 7.');
	}
	else {
		switch (numero) {
			case 1:
				console.log('Domingo');
				break;
			case 2:
				console.log('Segunda');
				break;
			case 3:
				console.log('Terça');
				break;
			case 4:
				console.log('Quarta');
				break;
			case 5:
				console.log('Quinta');
				break;
			case 6:
				console.log('Sexta');
				break;
			case 7:
				console.log('Sábado');
				break;
		}
	}

	rl.close();
});