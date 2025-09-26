/*
Objetivo do programa: Verificar Idade para Votar: Crie um algoritmo que receba a idade de uma pessoa e informe se ela já pode votar (idade igual ou superior a 16 anos).
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Idade para Votar');
console.log('------------------------------');

rl.question('Digite a idade: ', (answer) => {
	const idade = parseInt(answer);

	if (isNaN(idade) || idade < 0) {
		console.log('Entrada inválida. Por favor, digite uma idade válida.');
	} 
	else if (idade >= 16) {
		console.log('Você já pode votar!');
	} 
	else {
		console.log('Você ainda não pode votar.');
	}

	rl.close();
});