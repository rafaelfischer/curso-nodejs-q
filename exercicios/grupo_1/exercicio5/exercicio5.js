/*
	Objetivo do programa: Calcule a área de um quadrado.
	Como calcular: Area = lado * lado
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

console.log('Calculo da area de um quadrado');
console.log('-------------------------------');

rl.question('Digite o valor do lado do quadrado: ', (ladoInput) => {
	const lado = parseFloat(ladoInput);
	const area = lado * lado;
	console.log(`A area do quadrado e: ${area.toFixed(2)}`);
	rl.close();
});