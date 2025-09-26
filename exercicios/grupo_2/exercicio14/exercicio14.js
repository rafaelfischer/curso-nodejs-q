/*
Objetivo do programa: Média de Aprovação: Um aluno é aprovado se sua média final for igual ou superior a 7. Peça a nota do aluno e informe se ele foi "Aprovado" ou "Reprovado".
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Média de Aprovação');
console.log('---------------------------------');

rl.question('Digite a nota do aluno: ', (answer) => {
	const nota = parseFloat(answer);

	if (isNaN(nota) || nota < 0 || nota > 10) {
		console.log('Entrada inválida. Por favor, digite uma nota entre 0 e 10.');
	} 
	else if (nota >= 7.0) {
		console.log('Aprovado');
	} 
	else {
		console.log('Reprovado');
	}

	rl.close();
});