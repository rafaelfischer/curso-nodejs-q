
/*
	Objetivo do programa: Ano Bissexto: Um ano é bissexto se for divisível por 400 OU se for divisível por 4 E não for divisível por 100. Peça um ano e verifique se ele é bissexto.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Ano Bissexto');
console.log('---------------------------');

rl.question('Digite um ano: ', (answer) => {
	const ano = parseInt(answer);

	if (isNaN(ano) || ano < 0) {
		console.log('Entrada inválida. Por favor, digite um ano válido.');
	}
	else {
		const ehBissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
		if (ehBissexto) {
			console.log(`${ano} é um ano bissexto.`);
		}
		else {
			console.log(`${ano} não é um ano bissexto.`);
		}
	}

	rl.close();
});