/*
	Objetivo do programa: Pergunte a idade de uma pessoa. Diga se essa pessoa é uma criança (até 12 anos), um adolescente (13 a 17 anos), uma adulta (18 a 59 anos) ou idosa (60 anos ou mais)
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Classificador de Idade');
console.log('-----------------------');

rl.question('Digite a idade: ', (answer) => {
	const idade = parseInt(answer);

	if (isNaN(idade) || idade < 0) {
		console.log('Entrada inválida. Por favor, digite uma idade válida.');
	}
	else if (idade <= 12) {
		console.log('Criança');
	}
	else if (idade <= 17) {
		console.log('Adolescente');
	}
	else if (idade <= 59) {
		console.log('Adulto');
	}
	else {
		console.log('Idoso');
	}

	rl.close();
});