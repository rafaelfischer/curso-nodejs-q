/*
	Objetivo do programa: Pergunte o número do mês (1 a 12). Diga quantos dias ele tem (ano não bissexto). Atenção, utilize a estrutura CASE.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Dias do Mês');
console.log('--------------------------');

rl.question('Digite o número do mês (1-12): ', (answer) => {
	const mes = parseInt(answer);
	let dias;

	if (isNaN(mes) || mes < 1 || mes > 12) {
		console.log('Mês inválido! Por favor, digite um número entre 1 e 12.');
	}
	else {
		switch (mes) {
			case 2:
				dias = 28;
				break;
			case 4, 6, 9, 11:
				dias = 30;
				break;
			case 1, 3, 5, 7, 8, 10, 12:
				dias = 31;
				break;
		}
		console.log(`O mês ${mes} tem ${dias} dias.`);
	}

	rl.close();
});