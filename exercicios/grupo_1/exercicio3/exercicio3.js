/*
	Objetivo do programa: Perguntar o nome de um aluno, pergunte as 4 notas e calcule a média aritmética, exibindo no final.
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

console.log('Exercicio 3 - Calculo de media aritmetica');
console.log('-----------------------------------------');

rl.question('Digite o nome do aluno: ', (nome) => {
	rl.question('Digite a primeira nota: ', (nota1) => {
		rl.question('Digite a segunda nota: ', (nota2) => {
			rl.question('Digite a terceira nota: ', (nota3) => {
				rl.question('Digite a quarta nota: ', (nota4) => {
					const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
					console.log(`A media do aluno ${nome} e: ${media.toFixed(2)}`);
					rl.close();
				});
			});
		});
	});
});